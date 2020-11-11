import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const heightScreen = StatusBar.currentHeight || 0;

export const Container = styled.View``;

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
  text-align: center;
  color: #ffffff;
  font-family: 'Archivo-SemiBold';
  flex: 1;
`;

export const ButtonEditProfile = styled.TouchableOpacity`
  width: 50px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: flex-end;
`;

export const ItemEmpty = styled.View`
  width: 50px;
`;

export const InfoProfile = styled.View`
  align-items: center;
`;

export const ProfilePicture = styled.View`
  width: 180px;
  height: 180px;
  margin: auto;
  margin-top: -90px;
  border-radius: 90px;
  position: relative;
`;

export const ImageProfile = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
`;

export const ProfileNameText = styled.Text`
  font-size: 30px;
  max-width: 200px;
  font-family: 'Archivo-SemiBold';
  color: #3d3d4d;
  text-align: center;
  margin-top: 24px;
`;

export const EditProfile = styled.TouchableOpacity`
  background-color: #dc1637;
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;
