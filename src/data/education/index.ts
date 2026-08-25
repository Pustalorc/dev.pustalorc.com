import type Education from '@models/Education';

import education from '@data/education/education.json';
import { fetchDataFromApi, useApiDataSource } from '@utils/api-request';

export async function getEducation(): Promise<Education[]> {
  return useApiDataSource ? fetchDataFromApi<Education[]>('education') : education;
}
