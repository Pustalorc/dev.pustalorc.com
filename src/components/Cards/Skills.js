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

// ---------- PUBLIC ----------
export default function SkillsCard(props) {
  const skill = props.skill;
  const startYear = props.startYear;

  const yearsOfExperience = `${new Date().getUTCFullYear() - startYear} Year(s) of Experience`;

  return (
    <Grid {...GRID_ITEM_PROPS}>
      <Grid {...GRID_CONTAINER_PROPS}>
        <Grid item>
          <Typography {...SKILL_TITLE_TYPOGRAPHY_PROPS}>
            {skill}
          </Typography>
        </Grid>

        <Grid item>
          <Typography {...SKILL_BODY_TYPOGRAPHY_PROPS}>
            {yearsOfExperience}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

// ----------- PROP DEF -----------
SkillsCard.propTypes = {
  skill: PropTypes.string,
  startYear: PropTypes.string
};
