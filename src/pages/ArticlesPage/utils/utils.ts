export const getQuerySearchParams = (
  params: URLSearchParams,
): Record<string, string> => {
  const param: Record<string, string> = {};

  params.forEach((value, key) => {
    if (!value) return;
    param[key] = value;
  });

  return param;
};
