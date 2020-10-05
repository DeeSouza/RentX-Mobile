import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChooseDateAndFindCar from '../pages/ChooseDateAndFindCar';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}
  >
    <App.Screen name="ChooseDateAndFindCar" component={ChooseDateAndFindCar} />
  </App.Navigator>
);

export default AppRoutes;
