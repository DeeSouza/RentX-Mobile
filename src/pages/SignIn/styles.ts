import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  background-color: #ffffff;
  padding: 0px 32px;
  flex-direction: column;
  width: 100%;
`;

export const WrapperHeader = styled.View``;

export const HeadingText = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 40px;
  color: #3d3d4d;
  width: 169px;
  line-height: 44px;
`;

export const SubHeadingText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  color: #7a7a80;
  margin-top: 24px;
  width: 204px;
  line-height: 25px;
`;

export const WrapperForm = styled.View`
  margin-top: 80px;
  width: 100%;
`;

export const WrapperRememberAndForgot = styled.TouchableOpacity`
  padding: 34px 0px;
  justify-content: space-between;
  flex-direction: row;
`;

export const RememberUser = styled.View``;

export const RememberUserText = styled.Text`
  color: #737380;
  font-family: 'Archivo-Regular';
  font-size: 13px;
`;

export const ForgotPassword = styled.TouchableOpacity``;
export const ForgotPasswordText = styled.Text`
  color: #737380;
  font-family: 'Archivo-Regular';
  font-size: 13px;
`;
