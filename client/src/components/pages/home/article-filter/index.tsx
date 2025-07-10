'use client';

import { getArticleAuthors } from '@/api/articles';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import {
  AUTHOR_PARAM_KEY,
  getDefaultSortValueFromParams,
  NO_VALUE,
  SHARED_ASCENDING_SORT_OPTIONS,
  SHARED_DESCENDING_SORT_OPTIONS,
  SHARED_PARAM_KEY,
  VIEWED_ASCENDING_SORT_OPTIONS,
  VIEWED_DESCENDING_SORT_OPTIONS,
  VIEWED_PARAM_KEY,
} from './utils';

export const ArticleFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { data: authors, isError } = useQuery({
    queryKey: ['authors'],
    queryFn: () => getArticleAuthors(),
  });

  const onChangeSort = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === VIEWED_ASCENDING_SORT_OPTIONS || value === VIEWED_DESCENDING_SORT_OPTIONS) {
      params.delete(SHARED_PARAM_KEY);
    } else if (
      value === SHARED_ASCENDING_SORT_OPTIONS ||
      value === SHARED_DESCENDING_SORT_OPTIONS
    ) {
      params.delete(VIEWED_PARAM_KEY);
    }

    const [param, sort] = value.split('-');
    params.set(param, sort);
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };

  const onChangeFilterByAuthor = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === '-') {
      params.delete(AUTHOR_PARAM_KEY);
    } else {
      params.set(AUTHOR_PARAM_KEY, value);
    }

    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };

  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {isError ? null : (
        <div>
          <p className="text-sm text-secondary-foreground mb-1">Filter by author</p>

          <Select
            onValueChange={onChangeFilterByAuthor}
            defaultValue={searchParams.get(AUTHOR_PARAM_KEY) || undefined}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>

            <SelectContent id="filter-by-views">
              <SelectItem value={NO_VALUE}>-</SelectItem>

              {authors?.map((author) => (
                <SelectItem key={author.id} value={author.id.toString()}>
                  {author.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div>
        <p className="text-sm text-secondary-foreground mb-1">Sort by views or shares</p>

        <Select
          onValueChange={onChangeSort}
          defaultValue={getDefaultSortValueFromParams(searchParams)}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Choose an option" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value={NO_VALUE}>-</SelectItem>
            <SelectItem value={VIEWED_ASCENDING_SORT_OPTIONS}>Least viewed</SelectItem>
            <SelectItem value={VIEWED_DESCENDING_SORT_OPTIONS}>Most viewed</SelectItem>
            <SelectItem value={SHARED_ASCENDING_SORT_OPTIONS}>Least shared</SelectItem>
            <SelectItem value={SHARED_DESCENDING_SORT_OPTIONS}>Most shared</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
