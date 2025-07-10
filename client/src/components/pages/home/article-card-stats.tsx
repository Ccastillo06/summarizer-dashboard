import { Article } from '@/api/types/articles';
import { Eye, Share2 } from 'lucide-react';

export const ArticleCardStats = ({
  author,
  shares,
  views,
  textColor = '',
  authorColor = '',
}: {
  author: Article['author'];
  shares: Article['shares'];
  views: Article['views'];
  textColor?: string;
  authorColor?: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm ${textColor}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs">By</span>
        <span className={`font-medium ${authorColor}`}>{author.name}</span>
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
  );
};
