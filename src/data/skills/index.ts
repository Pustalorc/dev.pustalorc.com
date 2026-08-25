import type { SkillCategory } from '@models/Skill';

import skills from '@data/skills/skills.json';
import { fetchDataFromApi, useApiDataSource } from '@utils/api-request';

export async function getSkillCategories(): Promise<SkillCategory[]> {
  return useApiDataSource ? fetchDataFromApi<SkillCategory[]>('skills') : skills;
}
