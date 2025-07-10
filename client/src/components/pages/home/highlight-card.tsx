import { ArticleCard, type Props as ArticleCardProps } from '@/components/pages/home/article-card';

type Props = {
  hightlightTitle: string;
  HighlightTitleIcon: React.ReactNode;
} & ArticleCardProps;

export const HighlightCard = ({
  author,
  content,
  HighlightTitleIcon,
  hightlight,
  hightlightTitle,
  id,
  shares,
  title,
  views,
}: Props) => (
  <div>
    <h3 className="text-xl font-bold flex justify-center items-center gap-2 mb-4">
      {HighlightTitleIcon} {hightlightTitle}
    </h3>

    <ArticleCard
      author={author}
      content={content}
      hightlight={hightlight}
      id={id}
      shares={shares}
      title={title}
      views={views}
    />
  </div>
);
