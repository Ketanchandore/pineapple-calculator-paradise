-- Priority 1: Critical Data Security Fixes

-- 1. Secure User Usage Data
-- Drop the existing public INSERT policy
DROP POLICY IF EXISTS "System can insert usage data" ON public.user_usage;

-- Create service-role-only policy for usage tracking
CREATE POLICY "Service role can insert usage data" 
ON public.user_usage 
FOR INSERT 
WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

-- Create secure function to safely increment usage via service role
CREATE OR REPLACE FUNCTION public.secure_increment_user_usage(
  p_user_id uuid, 
  p_messages integer DEFAULT 0, 
  p_tokens integer DEFAULT 0, 
  p_uploads integer DEFAULT 0, 
  p_tts integer DEFAULT 0
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Validate inputs
  IF p_messages < 0 OR p_tokens < 0 OR p_uploads < 0 OR p_tts < 0 THEN
    RAISE EXCEPTION 'Usage values cannot be negative';
  END IF;
  
  IF p_messages > 1000 OR p_tokens > 1000000 OR p_uploads > 100 OR p_tts > 100 THEN
    RAISE EXCEPTION 'Usage values exceed reasonable limits';
  END IF;

  INSERT INTO public.user_usage (user_id, messages_sent, tokens_used, uploads_count, tts_requests)
  VALUES (p_user_id, p_messages, p_tokens, p_uploads, p_tts)
  ON CONFLICT (user_id, date)
  DO UPDATE SET
    messages_sent = user_usage.messages_sent + p_messages,
    tokens_used = user_usage.tokens_used + p_tokens,
    uploads_count = user_usage.uploads_count + p_uploads,
    tts_requests = user_usage.tts_requests + p_tts,
    updated_at = now();
END;
$$;

-- 2. Protect Analytics Data
-- Drop the existing public INSERT policy
DROP POLICY IF EXISTS "Authenticated users can insert analytics events" ON public.analytics_events;

-- Create service-role-only policy for analytics
CREATE POLICY "Service role can insert analytics events" 
ON public.analytics_events 
FOR INSERT 
WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

-- Add validation function for analytics events
CREATE OR REPLACE FUNCTION public.validate_analytics_event()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Validate event_type
  IF NEW.event_type NOT IN (
    'message_sent', 'file_uploaded', 'conversion_to_pro', 'ingest_failed',
    'calculator_used', 'page_view', 'user_signup', 'user_login'
  ) THEN
    RAISE EXCEPTION 'Invalid event_type: %', NEW.event_type;
  END IF;
  
  -- Validate event_data structure
  IF NEW.event_data IS NOT NULL THEN
    -- Ensure event_data is a valid JSON object
    IF jsonb_typeof(NEW.event_data) != 'object' THEN
      RAISE EXCEPTION 'event_data must be a JSON object';
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for analytics validation
DROP TRIGGER IF EXISTS validate_analytics_event_trigger ON public.analytics_events;
CREATE TRIGGER validate_analytics_event_trigger
  BEFORE INSERT OR UPDATE ON public.analytics_events
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_analytics_event();

-- 3. Implement Report Rate Limiting
-- Add rate limiting function
CREATE OR REPLACE FUNCTION public.check_report_rate_limit(p_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  report_count integer;
BEGIN
  -- Check reports created today by this user
  SELECT COUNT(*)
  INTO report_count
  FROM public.reports
  WHERE (reporter_email = (SELECT email FROM auth.users WHERE id = p_user_id) 
         OR subject_user_id = p_user_id)
    AND created_at >= CURRENT_DATE;
  
  RETURN report_count < 5;
END;
$$;

-- Add validation function for reports
CREATE OR REPLACE FUNCTION public.validate_report()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Rate limiting check
  IF NOT public.check_report_rate_limit(auth.uid()) THEN
    RAISE EXCEPTION 'Rate limit exceeded: Maximum 5 reports per day';
  END IF;
  
  -- Validate description content
  IF length(trim(NEW.description)) < 10 THEN
    RAISE EXCEPTION 'Report description must be at least 10 characters';
  END IF;
  
  IF length(NEW.description) > 2000 THEN
    RAISE EXCEPTION 'Report description cannot exceed 2000 characters';
  END IF;
  
  -- Basic spam detection
  IF NEW.description ~* '(spam|fake|test123|aaaaaa|111111)' THEN
    RAISE EXCEPTION 'Report appears to contain spam content';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for report validation
DROP TRIGGER IF EXISTS validate_report_trigger ON public.reports;
CREATE TRIGGER validate_report_trigger
  BEFORE INSERT OR UPDATE ON public.reports
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_report();

-- Update report policies for admin-only management
DROP POLICY IF EXISTS "Admins can update reports" ON public.reports;
CREATE POLICY "Admins can update and manage reports" 
ON public.reports 
FOR ALL
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

-- 4. Enhanced Resume Security
-- Add expiration validation function
CREATE OR REPLACE FUNCTION public.validate_shared_resume()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Validate expiration date
  IF NEW.expires_at IS NOT NULL AND NEW.expires_at <= now() THEN
    RAISE EXCEPTION 'Expiration date must be in the future';
  END IF;
  
  -- Ensure share_id is unique
  IF NEW.share_id IS NOT NULL THEN
    IF EXISTS (
      SELECT 1 FROM public.shared_resumes 
      WHERE share_id = NEW.share_id AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)
    ) THEN
      RAISE EXCEPTION 'Share ID must be unique';
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for resume validation
DROP TRIGGER IF EXISTS validate_shared_resume_trigger ON public.shared_resumes;
CREATE TRIGGER validate_shared_resume_trigger
  BEFORE INSERT OR UPDATE ON public.shared_resumes
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_shared_resume();

-- Create access logging table for shared resumes
CREATE TABLE IF NOT EXISTS public.shared_resume_access_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  shared_resume_id uuid NOT NULL REFERENCES public.shared_resumes(id) ON DELETE CASCADE,
  access_timestamp timestamp with time zone NOT NULL DEFAULT now(),
  ip_address inet,
  user_agent text,
  referrer text,
  access_type text NOT NULL DEFAULT 'view',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on access logs
ALTER TABLE public.shared_resume_access_logs ENABLE ROW LEVEL SECURITY;

-- Policy for access logs (only resume owners can view)
CREATE POLICY "Resume owners can view access logs" 
ON public.shared_resume_access_logs 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.shared_resumes sr 
    WHERE sr.id = shared_resume_access_logs.shared_resume_id 
    AND sr.user_id = auth.uid()
  )
);

-- Service role can insert access logs
CREATE POLICY "Service role can insert access logs" 
ON public.shared_resume_access_logs 
FOR INSERT 
WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

-- Function to log resume access
CREATE OR REPLACE FUNCTION public.log_resume_access(
  p_shared_resume_id uuid,
  p_ip_address inet DEFAULT NULL,
  p_user_agent text DEFAULT NULL,
  p_referrer text DEFAULT NULL,
  p_access_type text DEFAULT 'view'
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.shared_resume_access_logs (
    shared_resume_id, 
    ip_address, 
    user_agent, 
    referrer, 
    access_type
  )
  VALUES (
    p_shared_resume_id, 
    p_ip_address, 
    p_user_agent, 
    p_referrer, 
    p_access_type
  );
END;
$$;

-- Update shared resume policies with better expiration validation
DROP POLICY IF EXISTS "Public Resume View by share token" ON public.shared_resumes;
CREATE POLICY "Public Resume View by share token" 
ON public.shared_resumes 
FOR SELECT 
USING (
  privacy = 'public' 
  AND share_id IS NOT NULL 
  AND (expires_at IS NULL OR expires_at > now())
  AND share_id = ((current_setting('request.headers', true))::json ->> 'x-share-token')
);