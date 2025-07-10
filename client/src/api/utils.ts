export const buildUrlSearchParams = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams(params);
  const urlSearchParams = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return urlSearchParams;
};
