// ---------- IMPORTS ----------

// MODULES
import { Link } from 'gatsby';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

// FILES
import variant from '../../constants/text/variant';
import color from '../../constants/text/color';

// ---------- PRIVATE ----------
const BUTTON_SX = {
  color: 'white',
  textTransform: 'none',
  zIndex: 1,
  '&:hover': {
    background: 'none'
  }
};

const TYPOGRAPHY_PROPS = {
  variant: variant.simpleBody,
  color: color.inherit
};

// ---------- PUBLIC ----------
export default function InternalLinkButton(props) {
  const page = props.page;
  const typographyProps = props.typographyProps || TYPOGRAPHY_PROPS;

  return (
    <Grid item>
      <Link to={page.path}>
        <Button sx={BUTTON_SX}>
          <Typography {...typographyProps}>
            {page.name}
          </Typography>
        </Button>
      </Link>
    </Grid>
  );
}

// ----------- PROP DEF -----------
InternalLinkButton.propTypes = {
  page: PropTypes.object,
  typographyProps: PropTypes.object
};
