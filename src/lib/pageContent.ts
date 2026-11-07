import { createClient } from '@/lib/supabase/server';

// Backfills fields that exist in the current code (fallback) but are missing
// from content already saved in Supabase — so adding a new field to a page
// (e.g. an icon) doesn't get silently shadowed by an older saved snapshot.
// Values the admin already edited always win.
function deepMergeDefaults<T>(content: unknown, fallback: T): T {
  if (Array.isArray(fallback)) {
    if (!Array.isArray(content)) return fallback;
    return content.map((item, i) => deepMergeDefaults(item, fallback[i] ?? fallback[0])) as unknown as T;
  }

  if (fallback && typeof fallback === 'object') {
    if (!content || typeof content !== 'object') return fallback;
    const result: Record<string, unknown> = { ...(content as Record<string, unknown>) };
    for (const key of Object.keys(fallback as Record<string, unknown>)) {
      const fallbackValue = (fallback as Record<string, unknown>)[key];
      if (!(key in (content as Record<string, unknown>))) {
        result[key] = fallbackValue;
      } else {
        result[key] = deepMergeDefaults((content as Record<string, unknown>)[key], fallbackValue);
      }
    }
    return result as T;
  }

  return (content !== undefined ? content : fallback) as T;
}

export async function getPageContent<T>(slug: string, fallback: T): Promise<T> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('page_content')
    .select('content')
    .eq('slug', slug)
    .maybeSingle();

  if (data?.content) {
    return toWebpPaths(deepMergeDefaults(data.content, fallback));
  }
  return fallback;
}

// Conteúdo salvo antes da conversão aponta para /images/x.png; troca pela versão WebP
function toWebpPaths<T>(value: T): T {
  const json = JSON.stringify(value).replace(/\/images\/([^/"]+)\.(png|jpe?g)/g, '/images/webp/$1.webp');
  return JSON.parse(json) as T;
}

export const FIXED_PAGES: { slug: string; label: string }[] = [
  { slug: 'home', label: 'Home' },
  { slug: 'eventos', label: 'Eventos Corporativos' },
  { slug: 'temporada', label: 'Hospedagem (Temporada)' },
  { slug: 'book', label: 'Book Corporativo' },
  { slug: 'fauna', label: 'Espécies Nativas' },
  { slug: 'localizacao', label: 'Localização' },
];
