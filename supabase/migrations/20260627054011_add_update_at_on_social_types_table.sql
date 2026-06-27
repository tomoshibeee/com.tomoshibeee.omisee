-- updated_at 自動更新関数
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
before update on m_social_types
for each row
execute function update_updated_at_column();