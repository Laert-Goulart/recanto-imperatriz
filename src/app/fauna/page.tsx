import { FaunaClient } from './FaunaClient';
import { getPageContent } from '@/lib/pageContent';
import { faunaContent, FaunaContent } from '@/content/fauna';

export default async function Fauna() {
  const content = await getPageContent<FaunaContent>('fauna', faunaContent);
  return <FaunaClient content={content} />;
}
