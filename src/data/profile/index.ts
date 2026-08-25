import type Profile from '@models/Profile';

import profile from '@data/profile/profile.json';
import { fetchDataFromApi, useApiDataSource } from '@utils/api-request';

export async function getProfile(): Promise<Profile> {
  return useApiDataSource ? fetchDataFromApi<Profile>('profile') : profile;
}
