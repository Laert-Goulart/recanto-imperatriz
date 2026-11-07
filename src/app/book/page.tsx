import type { Metadata } from 'next';
import { BookClient } from './BookClient';

export const metadata: Metadata = {
  title: 'Book Corporativo | Recanto da Imperatriz',
  description: 'Baixe o material completo com espaços, formatos de evento e informações do Recanto da Imperatriz em Petrópolis.',
  alternates: { canonical: '/book' },
};
import { getPageContent } from '@/lib/pageContent';
import { bookContent, BookContent } from '@/content/book';

export default async function Book() {
  const content = await getPageContent<BookContent>('book', bookContent);
  return <BookClient content={content} />;
}
