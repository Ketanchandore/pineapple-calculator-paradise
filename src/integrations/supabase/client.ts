
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wufdrmkmndybhjxdstaz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1ZmRybWttbmR5YmhqeGRzdGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4OTM1NzAsImV4cCI6MjA2NTQ2OTU3MH0.Xd2VUCybceaa8CLQ_pggFBhPyyCLil0nrjUKhHELlN0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
