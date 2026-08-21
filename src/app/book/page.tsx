import { BookClient } from './BookClient';
import { getPageContent } from '@/lib/pageContent';
import { bookContent, BookContent } from '@/content/book';

export default async function Book() {
  const content = await getPageContent<BookContent>('book', bookContent);
  return <BookClient content={content} />;
}
