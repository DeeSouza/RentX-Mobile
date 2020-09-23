import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks/AppProvider';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#09090A"
        translucent
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};
export default App;
