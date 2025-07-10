import { Article } from '@/api/types/articles';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArticleCardStats } from '@/components/pages/home/article-card-stats';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';

export const ArticleModal = ({
  author,
  children,
  content,
  shares,
  title,
  views,
}: { children: React.ReactNode } & Omit<Article, 'id'>) => {
  return (
    <Dialog modal>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-auto">
        <DialogHeader className="pt-4">
          <ArticleCardStats author={author} views={views} shares={shares} />

          <DialogTitle className="text-2xl font-bold text-left">{title}</DialogTitle>
        </DialogHeader>

        <DialogDescription
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-primary text-lg"
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
