export const useGetLogoUrl = (logo: string) => {
  if (!logo) return null;

  if (logo.startsWith("http://") || logo.startsWith("https://")) {
    return logo;
  }

  const apiUrl = useRuntimeConfig().public.API_BASE_URL;
  return `${apiUrl}${logo}`;
};
