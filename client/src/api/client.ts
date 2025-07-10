type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const getApiClient =
  (baseApiUrl: string) =>
  async ({
    endpoint,
    method,
    data = null,
    options = {},
  }: {
    endpoint: string;
    method?: Methods;
    data?: unknown;
    options?: RequestInit;
  }) => {
    const url = `${baseApiUrl}${endpoint}`;

    const requestOptions: RequestInit = {
      ...options,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
    };

    if (data && method !== 'GET') {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Error ${response.status}: ${response.statusText} - ${
            errorData.message || 'Unknown error'
          }`,
        );
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error('API Request Failed:', error);
      throw error;
    }
  };
