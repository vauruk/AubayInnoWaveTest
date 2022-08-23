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
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(rootStore);

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={rootStore}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterNavigation />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
