alter table t_site_social_links
rename column type to type_id;
alter table t_site_social_links
add constraint fk_social_type
foreign key (type_id)
references m_social_types(id);