// ---------- IMPORTS ----------

// MODULES
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

// FILES
import justifyContent from '../../constants/flex/justifyContent';
import alignItems from '../../constants/flex/alignItems';
import direction from '../../constants/flex/direction';
import variant from '../../constants/text/variant';

// ---------- PRIVATE ----------
const GRID_ITEM_PROPS = {
  item: true,
  md: 2
};

const GRID_CONTAINER_PROPS = {
  container: true,
  direction: direction.column,
  justifyContent: justifyContent.spaceEvenly,
  alignItems: alignItems.center
};

const SKILL_TITLE_TYPOGRAPHY_PROPS = {
  variant: variant.tinyHeader
};

const SKILL_BODY_TYPOGRAPHY_PROPS = {
  variant: variant.smallBody
};

export default function ProfessionalExperienceCard(props) {
  const company = props.company;
  const title = props.title;
  const startYear = props.startYear;
  const endYear = props.endYear || 'Today';

  const yearRange = `${startYear} - ${endYear}`;

  return (
    <Grid {...GRID_ITEM_PROPS}>
      <Grid {...GRID_CONTAINER_PROPS}>
        <Grid item>
          <Typography {...SKILL_TITLE_TYPOGRAPHY_PROPS}>
            {company}
          </Typography>
        </Grid>

        <Grid item>
          <Typography {...SKILL_BODY_TYPOGRAPHY_PROPS}>
            {title}
          </Typography>
        </Grid>

        <Grid item>
          <Typography {...SKILL_BODY_TYPOGRAPHY_PROPS}>
            {yearRange}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

// ----------- PROP DEF -----------
ProfessionalExperienceCard.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
  startYear: PropTypes.string,
  endYear: PropTypes.string
};
