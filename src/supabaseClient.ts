import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gdqhsqnubkofnrrphmoz.supabase.co'; // from API settings
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkcWhzcW51YmtvZm5ycnBobW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMjk2NTksImV4cCI6MjA2OTgwNTY1OX0.TETE3cNK6SxtV3fsHvC03L2iWGv644RpKqM6ih-G4PM'; // from API settings (anon public key)

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
