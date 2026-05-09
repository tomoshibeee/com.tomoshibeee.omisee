create extension if not exists "pgcrypto";

create table site_layout (
    id uuid primary key default gen_random_uuid (),
    site_id uuid references sites (id),
    template text,
    data jsonb
);