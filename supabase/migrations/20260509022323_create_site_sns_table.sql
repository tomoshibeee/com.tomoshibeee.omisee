create extension if not exists "pgcrypto";

create table site_sns (
    id uuid primary key default gen_random_uuid (),
    site_id uuid references sites (id),
    type text,
    url text
);