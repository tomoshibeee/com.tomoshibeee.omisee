-- add description to meta
alter table t_site_metas
add column description text;

-- migrate data
update t_site_metas m
set description = s.description
from t_sites s
where m.site_id = s.id;

-- drop from sites
alter table t_sites
drop column description;