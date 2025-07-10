import { List } from 'lucide-react';

import { getArticles } from '@/api/articles';
import { SearchParamsFilters } from '@/types/filters';
import { ArticleCard } from './article-card';

export const ArticleList = async ({ params }: { params: SearchParamsFilters }) => {
  const articles = await getArticles(params);
  if (!articles.length) return null;

  return (
    <section>
      <h2 className="text-center text-2xl sm:text-4xl font-extrabold tracking-tight text-balance mb-8 flex justify-center items-center gap-4">
        <List size={32} /> All our articles
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[90%] mx-auto">
        {articles.map(({ id, title, content, author, views, shares }) => (
          <ArticleCard
            author={author}
            content={content}
            id={id}
            key={id}
            shares={shares}
            title={title}
            views={views}
          />
        ))}
      </div>
    </section>
  );
};
