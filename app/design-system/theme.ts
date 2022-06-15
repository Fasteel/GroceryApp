import {createTheme} from '@shopify/restyle';

const palette = {
  green: '#23AA49',
  red: '#FF324B',
};

const theme = createTheme({
  colors: {
    primary: palette.green,
    secondary: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
