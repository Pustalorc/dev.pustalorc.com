import type { Project, ProjectCategory } from '@models/Project';

import projects from '@data/projects/projects.json';
import { fetchDataFromApi, useApiDataSource } from '@utils/api-request';

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  return useApiDataSource ? fetchDataFromApi<ProjectCategory[]>('projects') : projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const categories = await getProjectCategories();
  return categories.flatMap((category) => category.projects).filter((project) => project.featured);
}

export async function getProjectCount(): Promise<number> {
  const categories = await getProjectCategories();
  return categories.find((category) => category.slug === 'my-projects')?.projects.length ?? 0;
}
