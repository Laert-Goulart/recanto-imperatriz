import { EventosClient } from './EventosClient';
import { getPageContent } from '@/lib/pageContent';
import { eventosContent, EventosContent } from '@/content/eventos';

export default async function Eventos() {
  const content = await getPageContent<EventosContent>('eventos', eventosContent);
  return <EventosClient content={content} />;
}
