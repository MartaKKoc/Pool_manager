
import { createClient } from '@supabase/supabase-js'
const API_URL = import.meta.env.Vite_supabase_url
const API_KEY = import.meta.env.Vite_supabase_api_key

const supabase = createClient(API_URL, API_KEY)

export { supabase };