create table public.t_sites (
    id uuid primary key default gen_random_uuid (),
    slug text not null unique,
    name text not null,
    description text,
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);