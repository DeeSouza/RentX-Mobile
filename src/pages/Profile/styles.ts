import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const heightScreen = StatusBar.currentHeight || 0;

export const Container = styled.SafeAreaView.attrs({
  paddingTop: Platform.OS === 'android' ? heightScreen : 0,
})`
  flex: 1;
  background-color: #ffffff;
`;

export const ScrollViewContainer = styled.ScrollView``;

export const Appointments = styled.View`
  padding: 64px 25px 0px;
`;

export const WrapperAppointments = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #e6e6f0;
  border-bottom-width: 1px;
  padding-bottom: 20px;
`;

export const TitleAppointmentText = styled.Text`
  font-size: 15px;
  color: #7a7a80;
  font-family: 'Archivo-Regular';
`;

export const AmountText = styled.Text`
  font-size: 15px;
  color: #47474d;
  font-family: 'Archivo-SemiBold';
`;

export const FavoriteCar = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const WrapperFavoriteCar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 28px 25px 16px;
`;

export const TitleFavoriteCarText = styled.Text`
  font-size: 15px;
  color: #7a7a80;
  font-family: 'Archivo-Regular';
`;

export const AmountUsedCarText = styled.Text`
  font-size: 15px;
  color: #47474d;
  font-family: 'Archivo-SemiBold';
`;

export const Car = styled.View`
  padding: 0px 16px;
`;
