import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoard from '../pages/OnBoard';
import SignIn from '../pages/SignIn';

const Initial = createStackNavigator();

const InitialRoutes: React.FC = () => (
  <Initial.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}
  >
    <Initial.Screen name="OnBoard" component={OnBoard} />
    <Initial.Screen name="SignIn" component={SignIn} />
  </Initial.Navigator>
);

export default InitialRoutes;
