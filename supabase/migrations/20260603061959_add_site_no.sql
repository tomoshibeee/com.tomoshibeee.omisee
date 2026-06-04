alter table t_sites
add column site_no bigint;

with numbered as (
  select id, row_number() over (order by created_at) as rn
  from t_sites
)
update t_sites
set site_no = numbered.rn
from numbered
where t_sites.id = numbered.id;

alter table t_sites
alter column site_no set not null;

alter table t_sites
add constraint t_sites_site_no_unique unique (site_no);

create sequence site_no_seq;

select setval('site_no_seq', (select max(site_no) from t_sites));

alter table t_sites
alter column site_no set default nextval('site_no_seq');