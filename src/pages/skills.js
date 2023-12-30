// ---------- IMPORTS ----------

// MODULES
import { Fragment } from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

// FILES
import PageFormat from '../components/Formats/PageFormat';
import SkillCategory from '../components/Cards/SkillCategory';

import categories from '../constants/skills/categories';

import justifyContent from '../constants/flex/justifyContent';
import alignItems from '../constants/flex/alignItems';
import direction from '../constants/flex/direction';

// ---------- PRIVATE ----------
const ROOT_CONTAINER_PROPS = {
  container: true,
  direction: direction.column,
  alignItems: alignItems.center,
  justifyContent: justifyContent.spaceEvenly,
  flexGrow: 1
};

const DIVIDER_STYLE = {
  borderColor: '#777777'
};

const DIVIDER_PROPS = {
  item: true,
  width: '85vw',
  paddingTop: 2,
  paddingBottom: 2
};

// ---------- PUBLIC ----------
export default function Skills() {
  const categoryElements = categories.map((category, index) => {
    const categoryElement = <SkillCategory {...category} />;

    let divider = null;
    if (index !== categories.length - 1) {
      divider = (
        <Grid {...DIVIDER_PROPS}>
          <Divider sx={DIVIDER_STYLE} />
        </Grid>
      );
    }

    return (
      <Fragment key={category.title}>
        {categoryElement}
        {divider}
      </Fragment>
    );
  });

  return (
    <PageFormat>
      <Grid {...ROOT_CONTAINER_PROPS}>
        {categoryElements}
      </Grid>
    </PageFormat>
  );
}
