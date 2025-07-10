'use client';

import { useQuery } from '@tanstack/react-query';
import { Sparkle, Wand2 } from 'lucide-react';
import { useState } from 'react';

import { getArticleSummary } from '@/api/articles';
import { Article } from '@/api/types/articles';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';

export const ArticleSummary = ({ title, id }: Pick<Article, 'id' | 'title'>) => {
  // This component is imperatively controlled due to the client making a request when mounted
  const [open, setOpen] = useState(false);

  const {
    data: summary,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['summary', id], // We automatically cache the query results with this key combination
    queryFn: ({ queryKey }) => getArticleSummary(queryKey[1] as number),
    enabled: !!id && open,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-800 text-white">
          Generate Summary <Wand2 />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-auto bg-accent">
        <DialogHeader className="pt-4">
          <DialogTitle className="text-2xl font-bold text-left">{title}</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-300" />
            <Skeleton className="h-4 w-full bg-gray-300" />
            <Skeleton className="h-4 w-full bg-gray-300" />
            <Skeleton className="h-4 w-full bg-gray-300" />
          </div>
        ) : null}

        {!isLoading && isError ? (
          <p className="text-red-600">
            An error ocurred while loading your summary. Please try again later or contact support
            if the error persists.
          </p>
        ) : null}

        {summary ? (
          <DialogDescription className="text-primary text-lg">
            {summary}

            <span className="text-sm text-secondary-foreground flex items-start gap-2 mt-4">
              <Sparkle />
              This summary was generated using an AI model. It may not be perfect, but it should be
              helpful.
            </span>
          </DialogDescription>
        ) : null}

        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
