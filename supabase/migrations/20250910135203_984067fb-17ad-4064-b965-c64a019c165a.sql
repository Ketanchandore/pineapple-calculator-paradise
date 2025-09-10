-- Security Fix 1: Prevent users from modifying is_admin field
CREATE OR REPLACE FUNCTION public.prevent_admin_modification()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow admin users to modify is_admin field
  IF OLD.is_admin IS DISTINCT FROM NEW.is_admin THEN
    IF NOT public.is_admin(auth.uid()) THEN
      RAISE EXCEPTION 'Access denied: Cannot modify admin status';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER prevent_admin_modification_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_admin_modification();

-- Security Fix 2: Drop over-permissive policies
DROP POLICY IF EXISTS "System can manage voice training jobs" ON public.voice_training_jobs;
DROP POLICY IF EXISTS "System can manage analytics summary" ON public.analytics_summary;

-- Create restricted policies for voice_training_jobs
CREATE POLICY "Service role can manage voice training jobs"
ON public.voice_training_jobs
FOR ALL
USING (auth.jwt() ->> 'role' = 'service_role');

-- Create restricted policies for analytics_summary  
CREATE POLICY "Service role can manage analytics summary"
ON public.analytics_summary
FOR ALL
USING (auth.jwt() ->> 'role' = 'service_role');

-- Security Fix 3: Update SECURITY DEFINER functions with safe search_path
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM public.profiles WHERE id = user_id),
    false
  );
$$;

CREATE OR REPLACE FUNCTION public.aggregate_daily_analytics()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Messages per day
  INSERT INTO public.analytics_summary (date, metric_type, metric_value)
  SELECT 
    DATE(created_at) as date,
    'messages_sent' as metric_type,
    COUNT(*) as metric_value
  FROM public.analytics_events
  WHERE event_type = 'message_sent'
    AND DATE(created_at) = CURRENT_DATE
  GROUP BY DATE(created_at)
  ON CONFLICT (date, metric_type)
  DO UPDATE SET 
    metric_value = EXCLUDED.metric_value,
    updated_at = now();

  -- File uploads per day
  INSERT INTO public.analytics_summary (date, metric_type, metric_value)
  SELECT 
    DATE(created_at) as date,
    'files_uploaded' as metric_type,
    COUNT(*) as metric_value
  FROM public.analytics_events
  WHERE event_type = 'file_uploaded'
    AND DATE(created_at) = CURRENT_DATE
  GROUP BY DATE(created_at)
  ON CONFLICT (date, metric_type)
  DO UPDATE SET 
    metric_value = EXCLUDED.metric_value,
    updated_at = now();

  -- Pro conversions per day
  INSERT INTO public.analytics_summary (date, metric_type, metric_value)
  SELECT 
    DATE(created_at) as date,
    'pro_conversions' as metric_type,
    COUNT(*) as metric_value
  FROM public.analytics_events
  WHERE event_type = 'conversion_to_pro'
    AND DATE(created_at) = CURRENT_DATE
  GROUP BY DATE(created_at)
  ON CONFLICT (date, metric_type)
  DO UPDATE SET 
    metric_value = EXCLUDED.metric_value,
    updated_at = now();

  -- Failed ingests per day
  INSERT INTO public.analytics_summary (date, metric_type, metric_value)
  SELECT 
    DATE(created_at) as date,
    'failed_ingests' as metric_type,
    COUNT(*) as metric_value
  FROM public.analytics_events
  WHERE event_type = 'ingest_failed'
    AND DATE(created_at) = CURRENT_DATE
  GROUP BY DATE(created_at)
  ON CONFLICT (date, metric_type)
  DO UPDATE SET 
    metric_value = EXCLUDED.metric_value,
    updated_at = now();
END;
$$;

CREATE OR REPLACE FUNCTION public.increment_user_usage(p_user_id uuid, p_messages integer DEFAULT 0, p_tokens integer DEFAULT 0, p_uploads integer DEFAULT 0, p_tts integer DEFAULT 0)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
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

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$;

-- Security Fix 4: Require authentication for reports and analytics_events
DROP POLICY IF EXISTS "Anyone can create reports" ON public.reports;
DROP POLICY IF EXISTS "System can insert analytics events" ON public.analytics_events;

CREATE POLICY "Authenticated users can create reports"
ON public.reports
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can insert analytics events"
ON public.analytics_events
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Security Fix 5: Add unique constraint to shared_resumes.share_id
ALTER TABLE public.shared_resumes 
ADD CONSTRAINT unique_share_id UNIQUE (share_id);