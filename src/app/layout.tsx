import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { JsonLd, SITE_URL } from '@/components/JsonLd';
import { siteConfig } from '@/content/config';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Código do Google Search Console (público por natureza; a variável na Vercel, se existir, tem prioridade)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'ebYq9dgMwQ2WDDG4iFXKl8SiftoNX_TybyWiadcybS8',
  },
  title: 'Recanto da Imperatriz | Eventos Corporativos em Petrópolis',
  description:
    'Espaço exclusivo em Petrópolis para reuniões, treinamentos, imersões e confraternizações empresariais. Ambiente de casa, estrutura de trabalho e natureza.',
  openGraph: {
    title: 'Recanto da Imperatriz | Eventos Corporativos em Petrópolis',
    description:
      'Espaço exclusivo em Petrópolis para reuniões, treinamentos, imersões e confraternizações empresariais.',
    url: SITE_URL,
    images: [{ url: '/og/recanto-og.jpg', width: 1200, height: 630 }],
    siteName: 'Recanto da Imperatriz',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🌿</text></svg>" />
      </head>
      <body className={archivo.className} style={{ margin: 0, lineHeight: '1.5' }}>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: SITE_URL,
            logo: `${SITE_URL}/images/webp/logo-recanto-imperatriz.webp`,
            email: siteConfig.email,
            telephone: `+${siteConfig.whatsapp}`,
            address: { '@type': 'PostalAddress', addressLocality: 'Petrópolis', addressRegion: 'RJ', addressCountry: 'BR' },
            sameAs: ['https://www.instagram.com/recantodaimperatriz/', siteConfig.airbnbUrl],
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
