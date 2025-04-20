import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://evbujjptklfbkhmbhjdt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YnVqanB0a2xmYmtobWJoamR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NDYxMDIsImV4cCI6MjA1OTUyMjEwMn0.zsz-2OLmZJWYspcMXlJaegCfq3KZ5gzVgjO4omph4Yo"
);

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// export const supabase = createClient(supabaseUrl, supabaseKey);
