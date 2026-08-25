export interface Skill {
  name: string;
  usedRecently: boolean;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
