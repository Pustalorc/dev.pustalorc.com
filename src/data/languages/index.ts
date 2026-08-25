import type Language from '@models/Language';

import languages from '@data/languages/languages.json';
import { fetchDataFromApi, useApiDataSource } from '@utils/api-request';

export async function getLanguages(): Promise<Language[]> {
  return useApiDataSource ? fetchDataFromApi<Language[]>('languages') : languages;
}
