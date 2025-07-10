import { ArticleList } from '@/components/pages/home/article-list';
import { Highlights } from '@/components/pages/home/highlights';

export default async function Home() {
  return (
    <main className="p-6 flex flex-col gap-12">
      <Highlights />
      <ArticleList />
    </main>
  );
}
