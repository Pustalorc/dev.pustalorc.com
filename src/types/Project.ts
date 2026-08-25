export interface ProjectLicense {
  id: string;
  href: string;
}

export interface Project {
  name: string;
  href: string | null;
  license: ProjectLicense | null;
  summary: string;
  full: string;
  featured: boolean;
}

export interface ProjectCategory {
  slug: string;
  label: string;
  projects: Project[];
}
