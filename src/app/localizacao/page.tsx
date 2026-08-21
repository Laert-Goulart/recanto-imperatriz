import { LocalizacaoClient } from './LocalizacaoClient';
import { getPageContent } from '@/lib/pageContent';
import { localizacaoContent, LocalizacaoContent } from '@/content/localizacao';

export default async function Localizacao() {
  const content = await getPageContent<LocalizacaoContent>('localizacao', localizacaoContent);
  return <LocalizacaoClient content={content} />;
}
