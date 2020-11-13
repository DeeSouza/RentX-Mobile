import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const heightScreen = StatusBar.currentHeight || 0;

export const Container = styled.SafeAreaView.attrs({
  paddingTop: Platform.OS === 'android' ? heightScreen : 0,
})`
  flex: 1;
  background-color: #fff;
`;

export const WrapperContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column',
  },
})``;

export const WrapperForms = styled.View`
  flex-direction: row;
  overflow: hidden;
`;

export const WrapperForm = styled.View`
  width: 100%;
  margin: 0;
  padding: 24px 24px 10px;
`;

export const FinalContainer = styled.View`
  margin-top: auto;
  padding: 24px 24px 10px;
`;
