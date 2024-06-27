// theme.js or theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: false,
      md: 350,
      lg: false,
      xl: 1700,
    },
  },
});

export default theme;