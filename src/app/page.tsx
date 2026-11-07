import type { Metadata } from 'next';
import { HomeClient } from './HomeClient';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};
import { getPageContent } from '@/lib/pageContent';
import { homeContent, HomeContent } from '@/content/home';

export default async function Home() {
  const content = await getPageContent<HomeContent>('home', homeContent);
  return <HomeClient content={content} />;
}
