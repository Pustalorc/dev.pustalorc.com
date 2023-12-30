// ---------- IMPORTS ----------

// MODULES
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

// FILES
import justifyContent from '../../constants/flex/justifyContent';
import ExternalLinkButton from '../Buttons/ExternalLinkButton';
import InternalLinkButton from '../Buttons/InternalLinkButton';
import direction from '../../constants/flex/direction';
import PAGES from '../../constants/pages/pages';

// ---------- PRIVATE ----------
const ROOT_CONTAINER_PROPS = {
  container: true,
  direction: direction.row,
  justifyContent: justifyContent.spaceEvenly,
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  sx: {
    background: 'linear-gradient(180deg, #4F4F4F 50%, #404040 95%)'
  }
};

function HeaderButton(props) {
  const page = props.page;

  if (page.href) {
    return <ExternalLinkButton page={page} />;
  }

  return <InternalLinkButton page={page} />;
}

// ---------- PUBLIC ----------
export default function Header() {
  const pageElements = PAGES.map((page) => <HeaderButton
    key={page.name}
    page={page}
  />);

  return (
    <Grid {...ROOT_CONTAINER_PROPS}>
      {pageElements}
    </Grid>
  );
}

// ----------- PROP DEF -----------
HeaderButton.propTypes = {
  page: PropTypes.object
};