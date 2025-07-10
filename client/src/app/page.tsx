import { ArticleList } from '@/components/pages/home/article-list';
import { Highlights } from '@/components/pages/home/highlights';
import { SearchParamsFilters } from '@/types/filters';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParamsFilters>;
}) {
  const params = await searchParams;

  return (
    <main className="p-6 flex flex-col gap-12">
      <Highlights params={params} />
      <ArticleList params={params} />
    </main>
  );
}
