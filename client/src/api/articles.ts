import { SearchParamsFilters } from '@/types/filters';
import { getApiClient } from './client';
import { Article } from './types/articles';
import { buildUrlSearchParams } from './utils';

const apiClient = getApiClient(process.env.NEXT_PUBLIC_API_BASE_URL!);

type ArticleRespose = Article[];
export const getArticles = async (
  params: SearchParamsFilters,
  options?: RequestInit,
): Promise<ArticleRespose> => {
  const response = await apiClient({
    endpoint: `/articles${buildUrlSearchParams(params)}`,
    options,
  });
  return response;
};

type HighlightedArticlesResponse = {
  mostViewed: Article | null;
  mostShared: Article | null;
};

export const getHighlightedArticles = async (
  params: SearchParamsFilters,
  options?: RequestInit,
): Promise<HighlightedArticlesResponse> => {
  try {
    const response = await apiClient({
      endpoint: `/articles/highlighted${buildUrlSearchParams(params)}`,
      options,
    });
    return response;
  } catch (error) {
    console.error('Error fetching highlighted articles:', error);

    return {
      mostViewed: null,
      mostShared: null,
    };
  }
};

export const getArticleSummary = async (id: number, options?: RequestInit): Promise<string> => {
  const response = await apiClient({ endpoint: `/articles/${id}/summary`, options });
  return response;
};

export const getArticleAuthors = async (options?: RequestInit): Promise<Article['author'][]> => {
  const response = await apiClient({ endpoint: '/articles/authors', options });
  return response;
};
