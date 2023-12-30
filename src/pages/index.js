// ---------- IMPORTS ----------

// MODULES
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// FILES
import { GITHUB_PAGE, PROJECT_PAGE, SKILLS_PAGE } from '../constants/pages/pages';

import InternalLinkButton from '../components/Buttons/InternalLinkButton';
import ExternalLinkButton from '../components/Buttons/ExternalLinkButton';
import PageFormat from '../components/Formats/PageFormat';

import justifyContent from '../constants/flex/justifyContent';
import alignItems from '../constants/flex/alignItems';
import direction from '../constants/flex/direction';
import variant from '../constants/text/variant';
import align from '../constants/text/align';
import color from '../constants/text/color';

// ---------- PRIVATE ----------
const PAGE_TITLE = 'Virtual Curriculum Vitae';

const ROOT_CONTAINER_PROPS = {
  container: true,
  direction: direction.column,
  alignItems: alignItems.stretch,
  justifyContent: justifyContent.spaceEvenly,
  flexGrow: 1
};

const TYPOGRAPHY_PROPS = {
  variant: variant.header,
  color: color.inherit,
  align: align.center
};

const ICON_SX = {
  position: 'relative',
  right: '7%',
  top: '25%'
};

const EXTERNAL_LINK_BUTTON_SIZE = 'large';

// ---------- PUBLIC ----------
export default function IndexPage() {
  return (
    <PageFormat>
      <Grid {...ROOT_CONTAINER_PROPS}>
        <Grid item>
          <Typography {...TYPOGRAPHY_PROPS}>
            {PAGE_TITLE}
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={direction.row}
            justifyContent={justifyContent.spaceEvenly}>
            <InternalLinkButton
              page={PROJECT_PAGE}
              typographyProps={TYPOGRAPHY_PROPS}
            />
            <InternalLinkButton
              page={SKILLS_PAGE}
              typographyProps={TYPOGRAPHY_PROPS}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={direction.row}
            justifyContent={justifyContent.spaceEvenly}>
            <ExternalLinkButton
              page={GITHUB_PAGE}
              typographyProps={TYPOGRAPHY_PROPS}
              iconSx={ICON_SX}
              iconSize={EXTERNAL_LINK_BUTTON_SIZE}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageFormat>
  );
}
