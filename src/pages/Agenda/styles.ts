import { Platform, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { IResultProps } from '.';

const heightScreen = StatusBar.currentHeight || 0;

export const Container = styled.SafeAreaView.attrs({
  paddingTop: Platform.OS === 'android' ? heightScreen : 0,
})`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  background-color: #1b1b1f;
  padding: 0px 25px;
  height: ${120 - heightScreen}px;
  justify-content: center;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-family: 'Archivo-SemiBold';
`;

export const AmountCarsText = styled.Text`
  font-size: 15px;
  color: #7a7a80;
  font-family: 'Archivo-Regular';
`;

export const ListWrapper = styled.View`
  flex: 1;
  padding: 0px 16px;
`;

export const Search = styled.View`
  height: 56px;
  flex-direction: row;
  background-color: #ffffff;
`;

export const SearchField = styled.View`
  flex: 1;
  background-color: #f4f5f6;
  height: 56px;
  border-bottom-color: #ebebf0;
  border-bottom-width: 1px;
`;

export const SearchButtonSubmit = styled.TouchableOpacity`
  max-width: 56px;
  background-color: #f4f5f6;
  border-bottom-color: #ebebf0;
  border-bottom-width: 1px;
  margin-left: 4px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const WrapperResultsCar = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const FlatListResults = styled(
  FlatList as new () => FlatList<IResultProps>,
)``;
