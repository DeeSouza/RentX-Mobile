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

export const Header = styled.View`
  background-color: #1b1b1f;
  padding: 32px 25px;
  height: ${228 - heightScreen}px;
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

export const ButtonEditProfile = styled.TouchableOpacity``;

export const ButtonLogout = styled.TouchableOpacity``;

export const InfoProfile = styled.View`
  align-items: center;
`;

export const ProfilePicture = styled.View`
  overflow: hidden;
  width: 180px;
  height: 180px;
  margin: auto;
  margin-top: -90px;
`;

export const ImageProfile = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ProfileNameText = styled.Text`
  font-size: 30px;
  max-width: 200px;
  font-family: 'Archivo-SemiBold';
  color: #3d3d4d;
  text-align: center;
  margin-top: 24px;
`;

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
