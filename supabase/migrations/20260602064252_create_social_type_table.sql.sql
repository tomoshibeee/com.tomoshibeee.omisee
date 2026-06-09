create table public.m_social_types (
    id text primary key, -- 'facebook', 'x', 'instagram'
    label text not null,
    icon text,
    created_at timestamptz default now ()
);

INSERT INTO public.m_social_types (id, label, icon)
VALUES
  ('facebook', 'Facebook', 'https://cdn-icons-png.flaticon.com/512/733/733547.png'),
  ('x', 'X (旧Twitter)', 'https://cdn-icons-png.flaticon.com/512/733/733579.png'),
  ('instagram', 'Instagram', 'https://cdn-icons-png.flaticon.com/512/733/733558.png'),
  ('line', 'LINE', 'https://cdn-icons-png.flaticon.com/512/733/733561.png'),
  ('youtube', 'YouTube', 'https://cdn-icons-png.flaticon.com/512/733/733646.png'),
  ('tiktok', 'TikTok', 'https://cdn-icons-png.flaticon.com/512/733/733635.png'),
  ('note', 'Note', 'https://cdn-icons-png.flaticon.com/512/733/733579.png');