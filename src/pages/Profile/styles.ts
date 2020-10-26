import { Platform, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';

const heightScreen = StatusBar.currentHeight || 0;

export const Container = styled.SafeAreaView.attrs({
  paddingTop: Platform.OS === 'android' ? heightScreen : 0,
})`
  flex: 1;
  background-color: #ffffff;
`;

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
  flex: 1;
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
