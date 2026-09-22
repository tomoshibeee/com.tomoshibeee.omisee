-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.m_social_types ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.m_social_types
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.t_blocks ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.t_blocks
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.t_global_news ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.t_global_news
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.t_sections ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.t_sections
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.t_site_metas ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.t_site_metas
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.t_site_news ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.t_site_news
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.t_site_social_links ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.t_site_social_links
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 1. RLS（行レベルセキュリティ）を有効化
ALTER TABLE public.t_sites ENABLE ROW LEVEL SECURITY;

-- 2. （必要に応じて）アクセス許可ポリシーの作成
-- 例: ログイン済みのユーザー（authenticated）のみ全操作を許可する場合
CREATE POLICY "Allow authenticated access" 
ON public.t_sites
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

