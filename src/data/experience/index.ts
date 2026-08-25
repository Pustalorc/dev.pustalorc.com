import type Job from '@models/Job';

import experience from '@data/experience/experience.json';
import { fetchDataFromApi, useApiDataSource } from '@utils/api-request';

export async function getExperience(): Promise<Job[]> {
  return useApiDataSource ? fetchDataFromApi<Job[]>('experience') : experience;
}
