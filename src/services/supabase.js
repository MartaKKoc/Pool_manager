
import { createClient } from '@supabase/supabase-js'
const API_URL = import.meta.env.Vite_supabase_url
const API_KEY = import.meta.env.Vite_supabase_api_key
// Create a single supabase client for interacting with your database
const supabase = createClient(API_URL, API_KEY)

export {supabase};