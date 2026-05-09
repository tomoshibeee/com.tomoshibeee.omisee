create extension if not exists "pgcrypto";

create table layout_blocks (
    id uuid primary key default gen_random_uuid (),
    layout_id uuid references site_layout (id),
    section_id text,
    type text,
    data jsonb,
    order_index int
);