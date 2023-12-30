// ---------- IMPORTS ----------

// MODULES
import Link from '@mui/material/Link';

// FILES

// ---------- PRIVATE ----------
const shortDescription1 = `Another web project with a focus on a split between the back-end and front-end. Back-end was 
  developed with `;
const shortDescription2 = ' whilst frontend was developed with ';
const koaLink = 'https://koajs.com/';
const koaLinkText = 'Koa,';
const reactLink = 'https://reactjs.com/';
const reactLinkText = 'React.';

const LINK_PROPS = {
  underline: 'hover',
  color: '#50f0ff'
};

const webApiProject = {
  title: 'Web-API Project',
  shortDescription: (
    <>
      {shortDescription1}
      <Link
        {...LINK_PROPS}
        href={koaLink}>
        {koaLinkText}
      </Link>
      {shortDescription2}
      <Link
        {...LINK_PROPS}
        href={reactLink}>
        {reactLinkText}
      </Link>
    </>
  ),
  fullDescription: `The website was meant to provide a service for gym memberships for a fictional gym. It supported 
    account creation, staff account creation, class creation, and an application creation (course sign-up).
    This was a solo project and was meant to show how each student had learnt and developed their abilities with 
    software development.`
};

// ---------- PUBLIC ----------
export default webApiProject;
