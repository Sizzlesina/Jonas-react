/** @format */

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sjtrgrwdnctufnghujyg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqdHJncndkbmN0dWZuZ2h1anlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMDEzMjMsImV4cCI6MjAxOTU3NzMyM30.SwJbckWvoMlDH7CoH-FlNFzONyLtlQTRA_e2Be16lxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
