import { createClient } from '@/lib/supabase/server';

export async function getPageContent<T>(slug: string, fallback: T): Promise<T> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('page_content')
    .select('content')
    .eq('slug', slug)
    .maybeSingle();

  if (data?.content) {
    return data.content as T;
  }
  return fallback;
}

export const FIXED_PAGES: { slug: string; label: string }[] = [
  { slug: 'home', label: 'Home' },
  { slug: 'eventos', label: 'Eventos Corporativos' },
  { slug: 'hospedagem', label: 'Hospedagem' },
  { slug: 'book', label: 'Book Corporativo' },
  { slug: 'fauna', label: 'Espécies Nativas' },
  { slug: 'localizacao', label: 'Localização' },
];
