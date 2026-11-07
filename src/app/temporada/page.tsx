import type { Metadata } from 'next';
import { TemporadaClient } from './TemporadaClient';
import { getPageContent } from '@/lib/pageContent';
import { temporadaContent, TemporadaContent } from '@/content/temporada';

export const metadata: Metadata = {
  title: 'Casa de Temporada em Petrópolis para 10 Pessoas | Recanto da Imperatriz',
  description:
    'Casa inteira em reserva ambiental em Petrópolis: 5 quartos, cachoeira, lareira e salão de festas. Nota 5,0 no Airbnb. Reserve pelo Airbnb ou WhatsApp.',
  alternates: { canonical: 'https://www.recantodaimperatriz.com.br/temporada' },
  openGraph: {
    title: 'Casa de Temporada em Petrópolis | Recanto da Imperatriz',
    description: 'Casa inteira para 10 hóspedes em reserva ambiental, com cachoeira e lareira. Nota 5,0 no Airbnb.',
    url: 'https://www.recantodaimperatriz.com.br/temporada',
    siteName: 'Recanto da Imperatriz',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/hero-fachada-externa.png' }],
  },
};

export default async function Temporada() {
  const content = await getPageContent<TemporadaContent>('temporada', temporadaContent);
  return <TemporadaClient content={content} />;
}
