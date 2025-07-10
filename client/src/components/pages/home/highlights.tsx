import { Eye, Share, Star } from 'lucide-react';

import { getHighlightedArticles } from '@/api/articles';
import { HighlightCard } from './highlight-card';
import { SearchParamsFilters } from '@/types/filters';

export const Highlights = async ({ params }: { params: SearchParamsFilters }) => {
  const highlights = await getHighlightedArticles(params);

  if (!highlights.mostViewed && !highlights.mostShared) return null;

  const { mostViewed, mostShared } = highlights;

  return (
    <section>
      <h2 className="text-center text-2xl sm:text-4xl font-extrabold tracking-tight text-balance mb-8 flex justify-center items-center gap-4">
        <Star size={32} />
        Our highlighted articles
      </h2>

      <div className="flex flex-row flex-wrap gap-8 justify-center">
        {mostShared ? (
          <HighlightCard
            hightlightTitle="Our most shared"
            HighlightTitleIcon={<Share />}
            hightlight="most-shared"
            id={mostShared.id}
            title={mostShared.title}
            content={mostShared.content}
            author={mostShared.author}
            views={mostShared.views}
            shares={mostShared.shares}
          />
        ) : null}

        {mostViewed ? (
          <HighlightCard
            hightlightTitle="Our most viewed"
            HighlightTitleIcon={<Eye />}
            hightlight="most-viewed"
            id={mostViewed.id}
            title={mostViewed.title}
            content={mostViewed.content}
            author={mostViewed.author}
            views={mostViewed.views}
            shares={mostViewed.shares}
          />
        ) : null}
      </div>
    </section>
  );
};
