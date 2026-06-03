create table public.t_site_news (
    id uuid primary key default gen_random_uuid (),
    site_id uuid not null references public.t_sites (id) on delete cascade,
    title text not null,
    content text,
    event_date date not null,
    published_at timestamptz not null default now (),
    doc text,
    youtube text,
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);

create index idx_site_news_site_id on public.t_site_news (site_id);
