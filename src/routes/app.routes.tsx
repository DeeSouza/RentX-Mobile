import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChooseDateAndFindCar from '../pages/ChooseDateAndFindCar';
import Main from '../pages/Main';
import List from '../pages/List';
import Agenda from '../pages/Agenda';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import SignOut from '../pages/SignOut';

import TabIconBar from '../components/TabIconBar';

const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator tabBar={(props) => <TabIconBar {...props} />}>
    <App.Screen
      options={{
        tabBarVisible: false,
      }}
      name="ChooseDateAndFindCar"
      component={ChooseDateAndFindCar}
    />
    <App.Screen name="Main" component={Main} />
    <App.Screen name="List" component={List} />
    <App.Screen name="Agenda" component={Agenda} />
    <App.Screen name="Profile" component={Profile} />
    <App.Screen
      options={{
        tabBarVisible: false,
      }}
      name="EditProfile"
      component={EditProfile}
    />

    <App.Screen
      options={{
        tabBarVisible: false,
      }}
      name="SignOut"
      component={SignOut}
    />
  </App.Navigator>
);

export default AppRoutes;
