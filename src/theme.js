// theme.js or theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 0,
      md: 350,
      lg: 1200,
      xl: 1700,
    },
  },
});

export default theme;