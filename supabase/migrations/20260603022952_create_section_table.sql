create table public.t_sections (
    id uuid primary key default gen_random_uuid (),
    site_id uuid not null references public.t_sites (id) on delete cascade,
    type text not null,
    display_order int not null default 0,
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);

create index idx_sections_site_id on public.t_sections (site_id);

create index idx_sections_site_order on public.t_sections (site_id, display_order);