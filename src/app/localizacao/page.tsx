import type { Metadata } from 'next';
import { LocalizacaoClient } from './LocalizacaoClient';

export const metadata: Metadata = {
  title: 'Localização e Como Chegar | Recanto da Imperatriz',
  description: 'O Recanto da Imperatriz fica em Petrópolis, na Região Serrana do Rio, a 15 minutos do centro histórico e cerca de 1h30 do Rio de Janeiro.',
  alternates: { canonical: '/localizacao' },
};
import { getPageContent } from '@/lib/pageContent';
import { localizacaoContent, LocalizacaoContent } from '@/content/localizacao';

export default async function Localizacao() {
  const content = await getPageContent<LocalizacaoContent>('localizacao', localizacaoContent);
  return <LocalizacaoClient content={content} />;
}
