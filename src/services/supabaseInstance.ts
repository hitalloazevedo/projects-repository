import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = String(process.env.SUPABASE_URL);
const supabaseKey = String(process.env.SUPABASE_API_KEY);

export const supabase = createClient(supabaseUrl, supabaseKey);