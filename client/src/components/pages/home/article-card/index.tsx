import { Eye, Share2, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  getBackgroundColor,
  getTextContentColor,
  getTitleColor,
} from '@/components/pages/home/article-card/utils';
import { Article } from '@/api/types/articles';

type Hightlight = 'most-viewed' | 'most-shared';
export type Props = {
  title: string;
  content: string;
  author: Article['author'];
  views: number;
  shares: number;
  hightlight?: Hightlight;
};

export const ArticleCard = ({ hightlight, title, content, author, views, shares }: Props) => {
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

        <div
          className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm ${textContentColor}`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs">By</span>
            <span className={`font-medium ${titleColor}`}>{author.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views}</span>
            </div>

            <div className="flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              <span>{shares}</span>
            </div>
          </div>
        </div>

        <Separator className="my-2 bg-purple-300" />
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <div
          className={`prose prose-sm ${textContentColor} line-clamp-6`}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex gap-2 justify-center">
          <Button>Read more</Button>
          <Button className="bg-purple-600 hover:bg-purple-800 text-white">
            Generate Summary <Wand2 />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
