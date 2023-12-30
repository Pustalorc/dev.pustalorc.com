// ---------- IMPORTS ----------

// MODULES
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

// FILES
import justifyContent from '../../constants/flex/justifyContent';
import alignContent from '../../constants/flex/alignContent';
import alignItems from '../../constants/flex/alignItems';
import direction from '../../constants/flex/direction';
import variant from '../../constants/text/variant';
import align from '../../constants/text/align';

import Project from './Project';

// ---------- PRIVATE ----------
const GRID_ITEM_SX = {
  display: 'flex',
  justifyContent: justifyContent.spaceEvenly
};

const GRID_ITEM_PROPS = {
  item: true,
  sx: GRID_ITEM_SX
};

const GRID_CONTAINER_PROPS = {
  container: true,
  direction: direction.row,
  justifyContent: justifyContent.spaceEvenly,
  alignContent: alignContent.spaceEvenly,
  alignItems: alignItems.flexStart,
  rowSpacing: 3,
  columnSpacing: 10,
  width: '100%'
};

// ---------- PUBLIC ----------
export default function ProjectCategory(props) {
  const title = props.title;
  const projects = props.projects;

  return (
    <>
      <Grid item>
        <Typography
          align={align.center}
          variant={variant.header}>
          {title}
        </Typography>
      </Grid>

      <Grid {...GRID_ITEM_PROPS}>
        <Grid {...GRID_CONTAINER_PROPS}>
          {projects.map((project) => (
            <Project
              key={project.title}
              {...project}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

// ----------- PROP DEF -----------
ProjectCategory.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.array
};
