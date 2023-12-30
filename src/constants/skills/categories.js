// ---------- IMPORTS ----------

// MODULES

// FILES
import ProfessionalExperienceCard from '../../components/Cards/ProfessionalExperience';
import LanguageCard from '../../components/Cards/Language';
import StudiesCard from '../../components/Cards/Studies';
import SkillsCard from '../../components/Cards/Skills';

import professionalExperience from './professionalExperience';
import languages from './languages';
import studies from './studies';
import skills from './skills';

// ---------- PRIVATE ----------
const categories = [
  {
    title: 'Professional Experience',
    skills: professionalExperience,
    cardComponent: ProfessionalExperienceCard
  },
  {
    title: 'Studies',
    skills: studies,
    cardComponent: StudiesCard
  },
  {
    title: 'Skills',
    skills: skills,
    cardComponent: SkillsCard
  },
  {
    title: 'Language Qualifications',
    skills: languages,
    cardComponent: LanguageCard
  }
];

// ---------- PUBLIC ----------
export default categories;
