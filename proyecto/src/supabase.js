// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://phdmfrhturvdcmulvjva.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZG1mcmh0dXJ2ZGNtdWx2anZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0Mzg1NTUsImV4cCI6MjA2MzAxNDU1NX0.cfTUuqOKC_YHbRzCmFNMnTdgzXUWFo_2YYuuav3iT1Q';
export const supabase = createClient(supabaseUrl, supabaseKey);
