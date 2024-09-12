export const getQueryParams = (params: Record<string, string>):string => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (!value) return;
    searchParams.set(key, value);
  });

  return `?${searchParams.toString()}`;
};
