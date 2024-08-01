import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zfyhlbcryacvbgbnpulw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeWhsYmNyeWFjdmJnYm5wdWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NTM2MjQsImV4cCI6MjAzODAyOTYyNH0.iNUkKDyOjaShDFdU6FSloprIXUsfJ9oC2fTDH2oOdO4';

export const supabase = createClient(supabaseUrl, supabaseKey);
