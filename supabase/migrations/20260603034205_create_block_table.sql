create table public.t_blocks (
    id uuid primary key default gen_random_uuid (),
    section_id uuid not null references public.t_sections (id) on delete cascade,
    type text not null,
    variant text not null default 'single',
    data jsonb,
    display_order int not null default 0,
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);

create index idx_blocks_section_id on public.t_blocks (section_id);
