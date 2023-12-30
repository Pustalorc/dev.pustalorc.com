// ---------- IMPORTS ----------

// MODULES
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';

// FILES
import justifyContent from '../../constants/flex/justifyContent';
import direction from '../../constants/flex/direction';
import variant from '../../constants/text/variant';
import align from '../../constants/text/align';
import color from '../../constants/text/color';

// ---------- PRIVATE ----------
const COPYRIGHT = '© 2022-';
const COPYRIGHT_NAME = ' - Vicente "Pustalorc" Pastor';
const CONTACT = 'Contact:';
const CREATED_WITH = 'Created with';
const AMPERSAND = '&';

const ROOT_CONTAINER_PROPS = {
  container: true,
  direction: direction.row,
  justifyContent: justifyContent.spaceEvenly,
  rowSpacing: '0.25rem',
  paddingBottom: '1rem',
  paddingTop: '1rem',
  sx: {
    background: 'linear-gradient(180deg, #404040 5%, #4F4F4F 50%)'
  }
};

const TYPOGRAPHY_PROPS = {
  variant: variant.simpleBody,
  color: color.inherit
};

const LINK_PROPS = {
  underline: 'hover',
  color: '#50F0FF'
};

const GRID_CONTAINER_PROPS = {
  container: true,
  spacing: '0.25rem',
  justifyContent: justifyContent.center
};

const emailLink = {
  href: 'mailto:contact@pustalorc.com',
  text: 'E-Mail'
};
const reactLink = {
  href: 'https://reactjs.org/',
  text: 'React,'
};
const gatsbyLink = {
  href: 'https://gatsbyjs.com/',
  text: 'Gatsby'
};
const muiLink = {
  href: 'https://mui.com/',
  text: 'MaterialUI'
};

function StyledLink(props) {
  const link = props.link;

  return (
    <Link
      {...LINK_PROPS}
      href={link.href}>
      {link.text}
    </Link>
  );
}

// ---------- PUBLIC ----------
export default function Footer() {
  const copyrightComplete = `${COPYRIGHT}${new Date().getUTCFullYear()}${COPYRIGHT_NAME}`;

  return (
    <Grid {...ROOT_CONTAINER_PROPS}>
      <Grid item>
        <Typography
          {...TYPOGRAPHY_PROPS}
          align={align.center}>
          {copyrightComplete}
        </Typography>
      </Grid>
      <Grid item>
        <Grid {...GRID_CONTAINER_PROPS}>
          <Grid item>
            <Typography {...TYPOGRAPHY_PROPS}>
              {CONTACT}
            </Typography>
          </Grid>

          <Grid item>
            <StyledLink link={emailLink} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid {...GRID_CONTAINER_PROPS}>
          <Grid item>
            <Typography {...TYPOGRAPHY_PROPS}>
              {CREATED_WITH}
            </Typography>
          </Grid>

          <Grid item>
            <StyledLink link={reactLink} />
          </Grid>

          <Grid item>
            <StyledLink link={gatsbyLink} />
          </Grid>

          <Grid item>
            <Typography {...TYPOGRAPHY_PROPS}>
              {AMPERSAND}
            </Typography>
          </Grid>

          <Grid item>
            <StyledLink link={muiLink} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// ----------- PROP DEF -----------
StyledLink.propTypes = {
  link: PropTypes.object
};
