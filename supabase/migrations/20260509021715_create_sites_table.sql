create extension if not exists "pgcrypto";

create table sites (
    id uuid primary key default gen_random_uuid (),
    slug text unique not null,
    name text not null,
    email text,
    address text,
    access text,
    message text,
    created_at timestamp default now ()
);