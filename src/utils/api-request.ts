const API_BASE_URL = import.meta.env.DATA_API_BASE_URL ?? 'https://api.pustalorc.com/dev';

export const useApiDataSource = import.meta.env.DATA_SOURCE === 'api';

export async function fetchDataFromApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch "${endpoint}" from API: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
