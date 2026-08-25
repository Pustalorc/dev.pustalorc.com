const en = {
  nav: {
    home: 'Home',
    resume: 'Resume',
    projects: 'Projects',
    toggleMenu: 'Toggle navigation menu'
  },
  hero: {
    greeting: 'whoami',
    viewResume: 'View Resume',
    viewProjects: 'View Projects',
    github: 'GitHub',
    emailMe: 'Email Me'
  },
  footer: {
    emailAria: 'Email',
    githubAria: 'GitHub',
    emailMe: 'Email Me',
    github: 'GitHub',
    lastBuiltOn: 'Last built on',
    withText: 'With',
    astro: 'Astro',
    sourceCode: 'Source Code',
    separator: '·'
  },
  cards: {
    current: 'Current',
    readMore: 'Read more',
    showLess: 'Show less',
    viewSource: 'View source',
    active: 'Active',
    past: 'Past'
  },
  home: {
    aboutEyebrow: 'about',
    aboutTitle: 'A little about me',
    featuredEyebrow: 'featured',
    featuredTitle: 'Featured Projects',
    viewAllProjects: 'View all projects',
    yearsProgramming: 'Years Programming',
    opensourceProjects: 'Opensource Projects',
    languagesSpoken: 'Languages Spoken'
  },
  resume: {
    pageTitle: 'Resume',
    pageDescription: (name: string) =>
      `Virtual curriculum vitae for ${name}: professional experience, education, skills, and language qualifications.`,
    careerEyebrow: 'virtual cv',
    careerTitle: 'Career Timeline',
    educationTag: 'Education',
    stackEyebrow: 'stack',
    stackTitle: 'Skills',
    activeLegend: 'Active - used recently',
    pastLegend: 'Past - used previously, not recently',
    languagesEyebrow: 'languages',
    languagesTitle: 'Language Qualifications'
  },
  projects: {
    pageTitle: 'Projects',
    pageDescription: (name: string) =>
      `Open-source projects and contributions by ${name}, sourced from github.com/Pustalorc.`,
    portfolioEyebrow: 'portfolio',
    portfolioTitle: 'Project Portfolio',
    allFilter: 'All'
  },
  notFound: {
    code: '404',
    pageTitle: 'Not Found',
    errorEyebrow: 'error',
    commandNotFound: 'command not found:',
    backHome: 'cd ~'
  }
};

export type Strings = typeof en;

export default en;
