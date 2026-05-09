create extension if not exists "pgcrypto";

create table news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  published_at timestamp default now()
);