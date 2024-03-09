import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    custom1: {
      main: 'rgba(3,126,255)',
    },
    custom2: {
      main: 'rgba(126,3,255)',
    },
  },
});

export default theme;
