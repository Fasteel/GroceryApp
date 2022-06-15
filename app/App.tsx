import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@app/design-system';
import {SplashScreen} from '@app/components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
}

export default App;
