// ---------- IMPORTS ----------

// MODULES
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import PropTypes from 'prop-types';

// FILES
import direction from '../../constants/flex/direction';
import underline from '../../constants/text/underline';
import variant from '../../constants/text/variant';
import align from '../../constants/text/align';

// ---------- PRIVATE ----------
const LINK_COLOR = '#50f0ff';

const DESCRIPTION_STYLE = {
  textAlign: align.justify,
  textAlignLast: align.center
};

function GetTitle(props) {
  if (props.titleUrl) {
    return (
      <Link
        href={props.titleUrl}
        underline={underline.hover}
        color={LINK_COLOR}>
        {props.title}
      </Link>
    );
  }

  return props.title;
}

function GetLicense(props) {
  if (!props.licenseUrl) {
    return undefined;
  }

  const licenseText = `${props.licenseCode} License`;

  return (
    <Link
      href={props.licenseUrl}
      variant={variant.caption}
      underline={underline.hover}
      color={LINK_COLOR}>
      {licenseText}
    </Link>
  );
}

// ---------- PUBLIC ----------
export default function Project(props) {
  return (
    <Grid
      item
      md={6}>
      <Grid
        container
        direction={direction.column}>
        <Grid item>
          <Typography
            align={align.center}
            variant={variant.smallHeader}
            gutterBottom>
            {GetTitle(props)}
            {' '}
            {GetLicense(props)}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant={variant.simpleBody}
            gutterBottom
            style={DESCRIPTION_STYLE}>
            {props.shortDescription}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant={variant.smallBody}
            gutterBottom
            style={DESCRIPTION_STYLE}>
            {props.fullDescription}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

// ----------- PROP DEF -----------
GetTitle.propTypes = {
  titleUrl: PropTypes.string,
  title: PropTypes.string
};

GetLicense.propTypes = {
  licenseUrl: PropTypes.string,
  licenseCode: PropTypes.string
};

Project.propTypes = {
  shortDescription: PropTypes.string,
  fullDescription: PropTypes.string,
  licenseUrl: PropTypes.string,
  licenseCode: PropTypes.string,
  titleUrl: PropTypes.string,
  title: PropTypes.string
};
