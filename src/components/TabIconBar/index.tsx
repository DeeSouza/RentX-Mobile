import React, { useCallback } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, IconTab, TraceLine } from './styles';

interface IIconProps {
  key: string;
  icon: string;
  colorIcon: string;
  isFocused: boolean;
}

const TabIconBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const iconsTabs = ['home', 'car', 'calendar', 'user'];
  const { routes, index } = state;
  const indexTab = index - 1;

  const { tabBarVisible } = descriptors[routes[index].key].options;

  const handleClickTab = useCallback(
    (selectedRoute) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: selectedRoute.key,
        canPreventDefault: true,
      });

      if (!selectedRoute.isFocused && !event.defaultPrevented) {
        navigation.navigate(selectedRoute.name);
      }
    },
    [navigation],
  );

  if (tabBarVisible === false) {
    return null;
  }

  const routeNames = routes
    .filter((route) => route.name !== 'ChooseDateAndFindCar')
    .map((route, indexRoute) => ({
      ...route,
      icon: iconsTabs[indexRoute],
      isFocused: indexRoute === indexTab,
      colorIcon: indexRoute === indexTab ? '#DC1637' : '#A0A0B2',
    }));

  return (
    <Container>
      {routeNames.map((item: IIconProps) => (
        <IconTab key={item.key} onPress={() => handleClickTab(item)}>
          <Icon name={item.icon} size={25} color={item.colorIcon} />
          {item.isFocused && <TraceLine />}
        </IconTab>
      ))}
    </Container>
  );
};

export default TabIconBar;
