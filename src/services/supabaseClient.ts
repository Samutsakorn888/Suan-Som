import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hptfgaoxnkqjkrfjehbr.supabase.co';
const supabaseKey = 'sb_publishable_cbG2EPnpCg_QpzXPLYpK-A_9XwwVhNk';

export const supabase = createClient(supabaseUrl, supabaseKey);
