import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const heightScreen = StatusBar.currentHeight || 0;

export const Container = styled.SafeAreaView.attrs({
  paddingTop: Platform.OS === 'android' ? heightScreen : 0,
})`
  flex: 1;
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
  height: 120px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FromDate = styled.View`
  flex: 1;
`;

export const FromDateText = styled.Text`
  color: #7a7a80;
  font-size: 10px;
`;

export const ToDate = styled.View`
  flex: 1;
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
