import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from '../assets/icons/home-icon.png';
import ListIcon from '../assets/icons/list-icon.png';
import CalendarIcon from '../assets/icons/calendar-icon.png';
import ProfileIcon from '../assets/icons/profile-icon.png';

import ChooseDateAndFindCar from '../pages/ChooseDateAndFindCar';
import Main from '../pages/Main';
import List from '../pages/List';
import Agenda from '../pages/Agenda';
import Profile from '../pages/Profile';

const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Main"
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <App.Screen
      options={{
        tabBarVisible: false,
      }}
      name="ChooseDateAndFindCar"
      component={ChooseDateAndFindCar}
    />
    <App.Screen
      name="Main"
      component={Main}
      options={{
        tabBarIcon: () => <Image source={HomeIcon} />,
      }}
    />
    <App.Screen
      name="List"
      component={List}
      options={{
        tabBarIcon: () => <Image source={ListIcon} />,
      }}
    />
    <App.Screen
      name="Agenda"
      component={Agenda}
      options={{
        tabBarIcon: () => <Image source={CalendarIcon} />,
      }}
    />
    <App.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: () => <Image source={ProfileIcon} />,
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
