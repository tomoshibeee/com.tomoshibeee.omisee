create table public.t_site_news (
    id uuid primary key default gen_random_uuid (),
    -- TODO : site_id(FK)
    site_id uuid not null,
    title text not null,
    content text,
    event_date date not null,
    published_at timestamptz not null default now (),
    doc text,
    youtube text,
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);