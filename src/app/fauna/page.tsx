import type { Metadata } from 'next';
import { FaunaClient } from './FaunaClient';

export const metadata: Metadata = {
  title: 'Espécies Nativas da Mata Atlântica | Recanto da Imperatriz',
  description: 'Conheça as aves e espécies nativas da Mata Atlântica que vivem na reserva ambiental do Recanto da Imperatriz, em Petrópolis.',
  alternates: { canonical: '/fauna' },
};
import { getPageContent } from '@/lib/pageContent';
import { faunaContent, FaunaContent } from '@/content/fauna';

export default async function Fauna() {
  const content = await getPageContent<FaunaContent>('fauna', faunaContent);
  return <FaunaClient content={content} />;
}
