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

export default function LanguageCard(props) {
  const language = props.language;
  const institution = props.institution;
  const acchivedScore = props.acchivedScore;
  const yearAcchieved = props.yearAcchieved;

  return (
    <Grid {...GRID_ITEM_PROPS}>
      <Grid {...GRID_CONTAINER_PROPS}>
        <Grid item>
          <Typography {...SKILL_TITLE_TYPOGRAPHY_PROPS}>
            {language}
          </Typography>
        </Grid>

        <Grid item>
          <Typography {...SKILL_BODY_TYPOGRAPHY_PROPS}>
            {institution}
          </Typography>
        </Grid>

        <Grid item>
          <Typography {...SKILL_BODY_TYPOGRAPHY_PROPS}>
            {acchivedScore}
          </Typography>
        </Grid>

        <Grid item>
          <Typography {...SKILL_BODY_TYPOGRAPHY_PROPS}>
            {yearAcchieved}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

// ----------- PROP DEF -----------
LanguageCard.propTypes = {
  language: PropTypes.string,
  institution: PropTypes.string,
  acchivedScore: PropTypes.string,
  yearAcchieved: PropTypes.string
};
