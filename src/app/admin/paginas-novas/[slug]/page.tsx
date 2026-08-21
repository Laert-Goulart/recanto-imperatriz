import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { CustomPageEditor } from '@/components/admin/CustomPageEditor';
import { CustomPage } from '@/lib/blocks';

export default async function EditCustomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data } = await supabase
    .from('custom_pages')
    .select('slug, title, meta_description, published, show_in_menu, blocks')
    .eq('slug', slug)
    .maybeSingle();

  if (!data) {
    notFound();
  }

  return <CustomPageEditor mode="edit" initialPage={data as CustomPage} />;
}
