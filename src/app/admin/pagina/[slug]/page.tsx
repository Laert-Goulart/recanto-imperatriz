import { notFound } from 'next/navigation';
import { getPageContent, FIXED_PAGES } from '@/lib/pageContent';
import { PageEditor } from '@/components/admin/PageEditor';

import { homeContent } from '@/content/home';
import { eventosContent } from '@/content/eventos';
import { hospedagemContent } from '@/content/hospedagem';
import { bookContent } from '@/content/book';
import { faunaContent } from '@/content/fauna';
import { localizacaoContent } from '@/content/localizacao';

const FALLBACKS: Record<string, Record<string, unknown>> = {
  home: homeContent,
  eventos: eventosContent,
  hospedagem: hospedagemContent,
  book: bookContent,
  fauna: faunaContent,
  localizacao: localizacaoContent,
};

export default async function EditFixedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const pageInfo = FIXED_PAGES.find((p) => p.slug === slug);
  const fallback = FALLBACKS[slug];

  if (!pageInfo || !fallback) {
    notFound();
  }

  const content = await getPageContent(slug, fallback);

  return <PageEditor slug={slug} label={pageInfo.label} initialContent={content} />;
}
