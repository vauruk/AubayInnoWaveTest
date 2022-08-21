/**
 * @Autor Vanderson de Moura Vauruk
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import RouterNavigation from '../../routes/router';
import {rootStore} from '../../store';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@rneui/themed';

import {theme} from '../../theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={rootStore}>
          <RouterNavigation />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
