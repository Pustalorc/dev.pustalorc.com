// ---------- IMPORTS ----------

// MODULES

// FILES
import closedSourceProjects from './closedSource';
import openSourceProjects from './openSource';
import universityProjects from './university';

// ---------- PRIVATE ----------
const categories = [
  {
    title: 'Open Source',
    projects: openSourceProjects
  },
  {
    title: 'Closed Source',
    projects: closedSourceProjects
  },
  {
    title: 'University Projects',
    projects: universityProjects
  }
];

// ---------- PUBLIC ----------
export default categories;