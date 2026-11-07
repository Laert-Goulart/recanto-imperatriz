import type { Metadata } from 'next';
import { TemporadaClient } from './TemporadaClient';
import { getPageContent } from '@/lib/pageContent';
import { temporadaContent, TemporadaContent } from '@/content/temporada';
import { JsonLd, SITE_URL } from '@/components/JsonLd';
import { siteConfig } from '@/content/config';

export const metadata: Metadata = {
  title: 'Casa de Temporada em Petrópolis para 10 Pessoas | Recanto da Imperatriz',
  description:
    'Casa inteira em reserva ambiental em Petrópolis: 5 quartos, cachoeira, lareira e salão de festas. Nota 5,0 no Airbnb. Reserve pelo Airbnb ou WhatsApp.',
  alternates: { canonical: '/temporada' },
  openGraph: {
    title: 'Casa de Temporada em Petrópolis | Recanto da Imperatriz',
    description: 'Casa inteira para 10 hóspedes em reserva ambiental, com cachoeira e lareira. Nota 5,0 no Airbnb.',
    url: 'https://www.recantodaimperatriz.com.br/temporada',
    siteName: 'Recanto da Imperatriz',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og/recanto-og.jpg', width: 1200, height: 630 }],
  },
};

export default async function Temporada() {
  const content = await getPageContent<TemporadaContent>('temporada', temporadaContent);
  const quartos = Number(content.numeros.find((n) => n.label === 'quartos')?.valor) || undefined;
  const checkin = content.regras.horarios.find((h) => h.label === 'Check-in')?.valor.slice(0, 5);
  const checkout = content.regras.horarios.find((h) => h.label === 'Check-out')?.valor.replace(/\D*(\d{2}:\d{2}).*/, '$1');

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LodgingBusiness',
          name: `${siteConfig.name} — Casa de Temporada`,
          description: content.hero.description,
          url: `${SITE_URL}/temporada`,
          image: content.galeria.images.slice(0, 6).map((i) => `${SITE_URL}${i.src}`),
          telephone: `+${siteConfig.whatsapp}`,
          email: siteConfig.email,
          address: { '@type': 'PostalAddress', addressLocality: 'Petrópolis', addressRegion: 'RJ', addressCountry: 'BR' },
          ...(quartos && { numberOfRooms: quartos }),
          ...(checkin && { checkinTime: checkin }),
          ...(checkout && { checkoutTime: checkout }),
          petsAllowed: false,
          smokingAllowed: false,
          amenityFeature: content.diferenciais.itens.map((d) => ({ '@type': 'LocationFeatureSpecification', name: d.title, value: true })),
          sameAs: [siteConfig.airbnbUrl],
        }}
      />
      <TemporadaClient content={content} />
    </>
  );
}
