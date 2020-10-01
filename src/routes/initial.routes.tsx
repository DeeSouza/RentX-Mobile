import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoard from '../pages/OnBoard';
import SignIn from '../pages/SignIn';
import SignUpFirstStep from '../pages/SignUp/FirstStep';
import SignUpSecondStep from '../pages/SignUp/SecondStep';
import DoneRegister from '../pages/SignUp/DoneRegister';

import BackLeftButton from '../components/BackLeftButton';

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
    <Initial.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFF',
          elevation: 0,
        },
        headerLeft: (props) => <BackLeftButton {...props} />,
      }}
    />

    <Initial.Screen
      name="SignUpFirstStep"
      component={SignUpFirstStep}
      options={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFF',
          elevation: 0,
        },
        headerLeft: (props) => <BackLeftButton {...props} />,
      }}
    />
    <Initial.Screen
      name="SignUpSecondStep"
      component={SignUpSecondStep}
      options={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFF',
          elevation: 0,
        },
        headerLeft: (props) => <BackLeftButton {...props} />,
      }}
    />
    <Initial.Screen name="DoneRegister" component={DoneRegister} />
  </Initial.Navigator>
);

export default InitialRoutes;
