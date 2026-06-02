create table public.t_site_social_links (
    id uuid primary key default gen_random_uuid (),
    site_id uuid not null references public.t_sites (id) on delete cascade,
    type text not null references public.m_social_types (id),
    url text not null,
    display_order int default 0,
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);