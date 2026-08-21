import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Recanto da Imperatriz | Eventos Corporativos em Petrópolis',
  description:
    'Espaço exclusivo em Petrópolis para reuniões, treinamentos, imersões e confraternizações empresariais. Ambiente de casa, estrutura de trabalho e natureza.',
  openGraph: {
    title: 'Recanto da Imperatriz | Eventos Corporativos em Petrópolis',
    description:
      'Espaço exclusivo em Petrópolis para reuniões, treinamentos, imersões e confraternizações empresariais.',
    url: 'https://recantodaimperatriz.com.br',
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
        {children}
      </body>
    </html>
  );
}
