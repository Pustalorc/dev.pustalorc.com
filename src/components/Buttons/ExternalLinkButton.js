// ---------- IMPORTS ----------

// MODULES
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import PropTypes from 'prop-types';

// FILES
import variant from '../../constants/text/variant';
import color from '../../constants/text/color';

// ---------- PRIVATE ----------
const ICON_SIZE = 'medium';

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

const ICON_SX = {
  position: 'relative',
  right: '10%',
  top: '15%'
};

const BUTTON_TARGET = '_blank';

const ICON_VIEW_BOX = '12 -12 24 24';

// ---------- PUBLIC ----------
export default function ExternalLinkButton(props) {
  const page = props.page;
  const iconSize = props.iconSize || ICON_SIZE;
  const typographyProps = props.typographyProps || TYPOGRAPHY_PROPS;
  const iconSx = props.iconSx || ICON_SX;

  return (
    <Grid item>
      <Button
        href={page.href}
        target={BUTTON_TARGET}
        sx={{ ...BUTTON_SX }}>
        <Typography {...typographyProps}>
          {page.name}
        </Typography>
      </Button>
      <OpenInNewIcon
        fontSize={iconSize}
        viewBox={ICON_VIEW_BOX}
        sx={iconSx}
      />
    </Grid>
  );
}

// ----------- PROP DEF -----------
ExternalLinkButton.propTypes = {
  page: PropTypes.object,
  iconSize: PropTypes.string,
  typographyProps: PropTypes.object,
  iconSx: PropTypes.object
};
