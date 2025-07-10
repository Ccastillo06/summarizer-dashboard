type ViewSortSearchParams = 'asc' | 'desc' | '-';
type ShareSortSearchParams = 'asc' | 'desc' | '-';

export type SearchParamsFilters = {
  viewed?: ViewSortSearchParams;
  shared?: ShareSortSearchParams;
};
