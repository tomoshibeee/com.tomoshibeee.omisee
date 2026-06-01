create table public.t_sites (
    id uuid primary key default gen_random_uuid (),
    -- 人間用ID（URL・識別用）
    slug text not null unique,
    -- 表示名
    name text not null,
    -- 任意：説明
    description text,
    created_at timestamptz not null default now (),
    updated_at timestamptz not null default now ()
);