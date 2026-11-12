// Substitua pelos dados do seu projeto no Supabase
const SUPABASE_URL = 'https://misohbkifqgkctzoeico.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_Mu41nCnzNCb7YNL3zDRudA_xN--t-At';

// Inicializa o cliente do Supabase globalmente
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);