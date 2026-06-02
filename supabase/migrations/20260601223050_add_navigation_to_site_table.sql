alter table public.t_sites
add column navigation jsonb default '{}'::jsonb;