create table public.t_site_metas (
    id uuid primary key default gen_random_uuid (),
    -- relation
    site_id uuid not null references public.t_sites (id) on delete cascade,
    -- basic info
    slug text not null unique,
    name text not null,
    tel text,
    email text,
    postal_code text,
    address text,
    building text,
    access text,
    -- todo: t_social_links
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);