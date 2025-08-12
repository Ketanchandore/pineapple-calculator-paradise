-- Secure shared_resumes public access by requiring a share token header and expiry checks
-- 1) Ensure RLS is enabled (idempotent)
ALTER TABLE public.shared_resumes ENABLE ROW LEVEL SECURITY;

-- 2) Remove overly permissive policy that exposed data publicly
DROP POLICY IF EXISTS "Public Resume View" ON public.shared_resumes;

-- 3) Add a safer public read policy gated by a share token header and expiry
-- Clients must include header: x-share-token: <share_id>
CREATE POLICY "Public Resume View by share token"
ON public.shared_resumes
FOR SELECT
USING (
  (privacy = 'public')
  AND share_id IS NOT NULL
  AND (expires_at IS NULL OR expires_at > now())
  AND share_id = (current_setting('request.headers', true)::json ->> 'x-share-token')
);

-- Note: Existing owner policy (auth.uid() = user_id) remains unchanged for authenticated owners.
-- This migration eliminates broad public reads and only allows access when a valid share token is explicitly provided via request header.