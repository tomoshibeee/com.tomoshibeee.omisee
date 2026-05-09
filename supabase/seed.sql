insert into
    news (title)
values
    ('最初のニュース'),
    ('テスト投稿');

-- SITE + SNS + NAV + LAYOUT
with site as (
  insert into sites (
    id, slug, name, email, address, access, message
  )
  values (
    gen_random_uuid(),
    'tokyo-church',
    '東京教会（デモ）',
    'info@tokyo-church.com',
    '東京都新宿区1-2-3',
    'JR新宿駅から徒歩5分',
    'ようこそ！'
  )
  returning id
),

sns as (
  insert into site_sns (site_id, type, url)
  select id, 'x', '#' from site
  union all
  select id, 'facebook', '#' from site
  union all
  select id, 'instagram', '#' from site
  union all
  select id, 'youtube', '#' from site
  union all
  select id, 'note', '#' from site
),

nav as (
  insert into site_navigation (site_id, label, href)
  select id, 'ホーム', '#' from site
  union all
  select id, '教会について', '#about' from site
  union all
  select id, '礼拝', '#service' from site
  union all
  select id, 'アクセス', '#access' from site
  union all
  select id, 'お問い合わせ', '#contact' from site
)

insert into site_layout (site_id, template, data)
select
  id,
  'template1',
  '{
    "sections": [
      { "id": "hero", "type": "hero" },
      { "id": "about", "type": "about" }
    ]
  }'::jsonb
from site;