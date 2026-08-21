-- Setup do Painel Administrativo — Recanto da Imperatriz
-- Execute isto no SQL Editor do Supabase (mesmo lugar onde rodou o SUPABASE_SETUP.sql)

-- 1) Tabela de conteúdo das 6 páginas fixas (Home, Eventos, Hospedagem, Book, Fauna, Localização)
CREATE TABLE page_content (
  slug TEXT PRIMARY KEY,
  content JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;

-- Qualquer um pode ler (o site precisa mostrar o conteúdo)
CREATE POLICY "Public read access" ON page_content
  FOR SELECT
  USING (true);

-- Só quem estiver logado no painel admin pode editar
CREATE POLICY "Authenticated write access" ON page_content
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated update access" ON page_content
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- 2) Tabela de páginas novas criadas pelo admin (além das 6 fixas)
CREATE TABLE custom_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT,
  published BOOLEAN DEFAULT true,
  show_in_menu BOOLEAN DEFAULT true,
  blocks JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE custom_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published pages" ON custom_pages
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated read all pages" ON custom_pages
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated insert pages" ON custom_pages
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated update pages" ON custom_pages
  FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated delete pages" ON custom_pages
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- 3) Bucket de armazenamento para fotos enviadas pelo painel admin
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true);

CREATE POLICY "Public read images" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'site-images');

CREATE POLICY "Authenticated upload images" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'site-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated update images" ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'site-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated delete images" ON storage.objects
  FOR DELETE
  USING (bucket_id = 'site-images' AND auth.role() = 'authenticated');

-- 4) Grants necessários (Postgres exige, além das políticas RLS acima)
GRANT SELECT ON page_content TO anon, authenticated;
GRANT INSERT, UPDATE ON page_content TO authenticated;

GRANT SELECT ON custom_pages TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON custom_pages TO authenticated;

COMMENT ON TABLE page_content IS 'Conteúdo editável das 6 páginas fixas do site';
COMMENT ON TABLE custom_pages IS 'Páginas novas criadas pelo painel admin, sem precisar de deploy de código';
