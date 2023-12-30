// ----------- IMPORTS -----------

// MODULES
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

// FILES
import justifyContent from '../../constants/flex/justifyContent';
import alignItems from '../../constants/flex/alignItems';
import direction from '../../constants/flex/direction';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Helmet from '../Helmet/Helmet';

import darkTheme from '../../themes/dark';

// ----------- PRIVATE -----------
const GRID_SX = {
  minWidth: '100%',
  minHeight: '100vh'
};

const ROOT_CONTAINER_PROPS = {
  container: true,
  direction: direction.column,
  alignItems: alignItems.stretch,
  justifyContent: justifyContent.spaceBetween,
  sx: GRID_SX
};

const CONTENT_ITEM_SX = {
  flexGrow: 1,
  display: 'flex',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  background: 'linear-gradient(180deg, #404040 0%, #444444 50%, #404040 100%)'
};

// ----------- PUBLIC -----------
export default function PageFormat(props) {
  const children = props.children;

  return (
    <>
      <Helmet />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid {...ROOT_CONTAINER_PROPS}>
          <Grid item>
            <Header />
          </Grid>

          <Grid
            item
            sx={CONTENT_ITEM_SX}>
            {children}
          </Grid>

          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

// ----------- PROP DEF -----------
PageFormat.propTypes = {
  children: PropTypes.element
};
