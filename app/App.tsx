import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@app/design-system';
import {SplashScreen} from '@app/components';
import {Text} from 'react-native';
import {useFakeLoading} from '@app/hooks';

function App() {
  const loading = useFakeLoading();

  return (
    <ThemeProvider theme={theme}>
      {loading ? <SplashScreen /> : <Text>Hello World !</Text>}
    </ThemeProvider>
  );
}

export default App;
