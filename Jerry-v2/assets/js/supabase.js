// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL = "https://nmbmqkkaybmtfvqlzhou.supabase.co";

const SUPABASE_ANON_KEY = sb_publishable_StVaYpHZJRO6xmz_pIC8sw_tMTPJnQA;

// Create Client
const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

