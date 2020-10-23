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

export const HeaderDate = styled.View`
  background-color: #1b1b1f;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  height: ${120 - heightScreen}px;
`;

export const GroupDateChoosed = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const FromDate = styled.View`
  flex: 1;
  width: 45%;
`;

export const FromDateText = styled.Text`
  color: #7a7a80;
  font-size: 10px;
`;

export const ImageArrow = styled.View`
  align-items: center;
  flex: 1;
`;

export const ToDate = styled.View`
  flex: 1;
  width: 45%;
`;

export const ToDateText = styled.Text`
  color: #7a7a80;
  font-size: 10px;
`;

export const FromDateValue = styled.View`
  margin-top: 10px;
  border-color: rgba(253, 237, 239, 0.25);
  border-style: solid;
`;

export const FromDateValueText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'Archivo-Regular';
`;

export const ToDateValue = styled.View`
  margin-top: 10px;
  border-color: rgba(253, 237, 239, 0.25);
  border-style: solid;
`;

export const ToDateValueText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'Archivo-Regular';
`;

export const WrapperResultsCar = styled.View`
  flex: 1;
`;

export const WrapperFilter = styled.View`
  padding: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapperText = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 25px;
  color: #47474d;
`;

export const AmountResultText = styled.Text`
  font-family: 'Archivo-REgular';
  font-size: 13px;
  color: #aeaeb3;
  margin-left: auto;
`;

export const FilterButton = styled.TouchableOpacity`
  margin-left: 26px;
`;

export const FlatListResults = styled(
  FlatList as new () => FlatList<IResultProps>,
)`
  padding: 0px 16px 0px 16px;
`;
