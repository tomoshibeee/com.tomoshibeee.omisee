create table site_navigation (
    id uuid primary key default gen_random_uuid (),
    site_id uuid references sites (id),
    label text,
    href text,
    order_index int
);