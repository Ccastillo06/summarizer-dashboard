import { getApiClient } from './client';
import { Article } from './types/articles';

const apiClient = getApiClient(process.env.NEXT_PUBLIC_API_BASE_URL!);

type ArticleRespose = Article[];
export const getArticles = async (options?: RequestInit): Promise<ArticleRespose> => {
  const response = await apiClient({ endpoint: '/articles', options });
  return response;
};

type HighlightedArticlesResponse = {
  mostViewed: Article | null;
  mostShared: Article | null;
};

export const getHighlightedArticles = async (
  options?: RequestInit,
): Promise<HighlightedArticlesResponse> => {
  try {
    const response = await apiClient({ endpoint: '/articles/highlighted', options });
    return response;
  } catch (error) {
    console.error('Error fetching highlighted articles:', error);

    return {
      mostViewed: null,
      mostShared: null,
    };
  }
};
