import type { ReadonlyURLSearchParams } from 'next/navigation';

export const VIEWED_PARAM_KEY = 'viewed';
export const SHARED_PARAM_KEY = 'shared';
export const AUTHOR_PARAM_KEY = 'author';

export const NO_VALUE = '-';
export const VIEWED_DESCENDING_SORT_OPTIONS = `${VIEWED_PARAM_KEY}-desc`;
export const VIEWED_ASCENDING_SORT_OPTIONS = `${VIEWED_PARAM_KEY}-asc`;
export const SHARED_DESCENDING_SORT_OPTIONS = `${SHARED_PARAM_KEY}-desc`;
export const SHARED_ASCENDING_SORT_OPTIONS = `${SHARED_PARAM_KEY}-asc`;

export const getDefaultSortValueFromParams = (params: ReadonlyURLSearchParams) => {
  const viewedSort = params.get(VIEWED_PARAM_KEY);
  if (viewedSort) {
    return `${VIEWED_PARAM_KEY}-${viewedSort}`;
  }

  const sharedSort = params.get(SHARED_PARAM_KEY);
  if (sharedSort) {
    return `${SHARED_PARAM_KEY}-${sharedSort}`;
  }

  return NO_VALUE;
};
