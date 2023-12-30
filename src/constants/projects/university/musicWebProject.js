// ---------- IMPORTS ----------

// MODULES
import Link from '@mui/material/Link';

// FILES

// ---------- PRIVATE ----------
const shortDescription1 = 'A web project developed with ';
const linkText = 'Koa.';

const LINK_PROPS = {
  href: 'https://koajs.com/',
  underline: 'hover',
  color: '#50f0ff'
};

const musicWebProject = {
  title: '\'My Music\' Web Project',
  shortDescription: (
    <>
      {shortDescription1}
      <Link {...LINK_PROPS}>
        {linkText}
      </Link>
    </>
  ),
  fullDescription: `The website was a music sharing platform with ratings, comments, and playlists. However, due to 
    obvious copyright issues, it was never fully publicised and was left as private work for university grading only. 
    This was the second group project, where we had to collaborate and use Git in order to post all of our changes. I 
    Took it above the requirements and set-up a Jenkins script to automatically build and deploy the website whenever a 
    new commit was made on the master branch.`
};

// ---------- PUBLIC ----------
export default musicWebProject;
