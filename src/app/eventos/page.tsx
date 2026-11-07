import type { Metadata } from 'next';
import { EventosClient } from './EventosClient';

export const metadata: Metadata = {
  title: 'Eventos Corporativos em Petrópolis | Recanto da Imperatriz',
  description:
    'Casa exclusiva em Petrópolis para reuniões executivas, treinamentos, imersões e confraternizações de empresas, com hospedagem e natureza.',
  alternates: { canonical: '/eventos' },
};
import { getPageContent } from '@/lib/pageContent';
import { eventosContent, EventosContent } from '@/content/eventos';

export default async function Eventos() {
  const content = await getPageContent<EventosContent>('eventos', eventosContent);
  return <EventosClient content={content} />;
}
