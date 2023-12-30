// ---------- IMPORTS ----------

// MODULES
import { createTheme } from '@mui/material';

// ---------- PRIVATE ----------
const themeDark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#444444'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

// ---------- PUBLIC ----------
export default themeDark;
