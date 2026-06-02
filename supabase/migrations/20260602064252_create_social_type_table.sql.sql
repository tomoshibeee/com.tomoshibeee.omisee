create table public.m_social_types (
    id text primary key, -- 'facebook', 'x', 'instagram'
    label text not null,
    icon text,
    created_at timestamptz default now ()
);