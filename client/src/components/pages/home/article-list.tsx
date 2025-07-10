import { List } from 'lucide-react';
import { ArticleCard } from './article-card';
import { getArticles } from '@/api/articles';

export const ArticleList = async () => {
  const articles = await getArticles({
    cache: 'reload', // Force Next to save cache for this page server configuration until reload
  });

  if (!articles.length) return null;

  return (
    <section>
      <h2 className="text-center text-2xl sm:text-4xl font-extrabold tracking-tight text-balance mb-8 flex justify-center items-center gap-4">
        <List size={32} /> All our articles
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[90%] mx-auto">
        {articles.map(({ id, title, content, author, views, shares }) => (
          <ArticleCard
            key={id}
            title={title}
            content={content}
            author={author}
            views={views}
            shares={shares}
          />
        ))}
      </div>
    </section>
  );
};
