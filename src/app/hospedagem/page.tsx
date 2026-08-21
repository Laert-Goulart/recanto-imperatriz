import { HospedagemClient } from './HospedagemClient';
import { getPageContent } from '@/lib/pageContent';
import { hospedagemContent, HospedagemContent } from '@/content/hospedagem';

export default async function Hospedagem() {
  const content = await getPageContent<HospedagemContent>('hospedagem', hospedagemContent);
  return <HospedagemClient content={content} />;
}
