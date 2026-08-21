import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTopButton } from '@/components/BackToTopButton';
import { BlockRenderer } from '@/components/BlockRenderer';
import { Block } from '@/lib/blocks';
import { colors } from '@/content/config';

export default async function CustomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data } = await supabase
    .from('custom_pages')
    .select('title, meta_description, blocks, published')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (!data) {
    notFound();
  }

  const blocks = (data.blocks as Block[]) || [];

  return (
    <div style={{ background: colors.bg, color: colors.text, minHeight: '100vh' }}>
      <Header />
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from('custom_pages')
    .select('title, meta_description')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  return {
    title: data ? `${data.title} | Recanto da Imperatriz` : 'Recanto da Imperatriz',
    description: data?.meta_description || '',
  };
}
