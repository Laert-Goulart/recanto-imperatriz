import type { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

const BASE = 'https://www.recantodaimperatriz.com.br';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const fixed = ['', '/eventos', '/hospedagem', '/book', '/fauna', '/localizacao'].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
  }));

  let custom: MetadataRoute.Sitemap = [];
  try {
    const { data } = await supabase.from('custom_pages').select('slug, updated_at').eq('published', true);
    custom = (data ?? []).map((p) => ({
      url: `${BASE}/pagina/${p.slug}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
    }));
  } catch {
    // sitemap still works with the fixed pages
  }

  return [...fixed, ...custom];
}
