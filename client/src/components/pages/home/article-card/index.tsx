import { Article } from '@/api/types/articles';
import {
  getBackgroundColor,
  getTextContentColor,
  getTitleColor,
} from '@/components/pages/home/article-card/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { ArticleCardStats } from '../article-card-stats';
import { ArticleModal } from '../article-modal';
import { ArticleSummary } from '../article-summary';

type Hightlight = 'most-viewed' | 'most-shared';
export type Props = { hightlight?: Hightlight } & Article;

export const ArticleCard = ({ hightlight, title, content, author, views, shares, id }: Props) => {
  const backgroundColor = getBackgroundColor<Hightlight>(hightlight);
  const titleColor = getTitleColor<Hightlight>(hightlight);
  const textContentColor = getTextContentColor<Hightlight>(hightlight);

  return (
    <Card
      className={`w-full max-w-md shadow-md rounded-2xl border-purple-300 border-2 gap-4 ${backgroundColor}`}
    >
      <CardHeader>
        <CardTitle className={`text-xl font-semibold line-clamp-2 min-h-[60px] ${titleColor}`}>
          {title}
        </CardTitle>

        <ArticleCardStats
          author={author}
          views={views}
          shares={shares}
          textColor={textContentColor}
          authorColor={titleColor}
        />

        <Separator className="my-2 bg-purple-300" />
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <div
          className={`prose prose-sm ${textContentColor} line-clamp-6`}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex gap-2 justify-center">
          <ArticleModal
            title={title}
            content={content}
            author={author}
            views={views}
            shares={shares}
          >
            <Button>Read more</Button>
          </ArticleModal>

          <ArticleSummary id={id} title={title} />
        </div>
      </CardContent>
    </Card>
  );
};
