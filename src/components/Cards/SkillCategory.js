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
import align from '../../constants/text/align';

// ---------- PRIVATE ----------
const ROOT_CONTAINER_PROPS = {
  container: true,
  direction: direction.row,
  justifyContent: justifyContent.center,
  alignItems: alignItems.flexStart,
  rowSpacing: 3,
  columnSpacing: 5,
  width: '100%'
};

const GRID_ITEM_SX = {
  display: 'flex',
  justifyContent: justifyContent.spaceEvenly,
  width: '100vw'
};

const GRID_ITEM_PROPS = {
  item: true,
  sx: GRID_ITEM_SX
};

const TITLE_TYPOGRAPHY_PROPS = {
  align: align.center,
  variant: variant.header
};

// ---------- PUBLIC ----------
export default function SkillCategory(props) {
  const title = props.title;
  const CardComponent = props.cardComponent || React.Fragment;
  const skills = props.skills;

  const skillCards = skills.map((skill) => (
    <CardComponent
      key={skill}
      {...skill}
    />
  ));

  return (
    <>
      <Grid item>
        <Typography {...TITLE_TYPOGRAPHY_PROPS}>
          {title}
        </Typography>
      </Grid>

      <Grid {...GRID_ITEM_PROPS}>
        <Grid {...ROOT_CONTAINER_PROPS}>
          {skillCards}
        </Grid>
      </Grid>
    </>
  );
}

// ----------- PROP DEF -----------
SkillCategory.propTypes = {
  title: PropTypes.string,
  cardComponent: PropTypes.elementType,
  skills: PropTypes.array
};
