import styled from 'styled-components/native';

interface ICheckboxContainerProps {
  checked: boolean;
}

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
  align-items: center;
`;

export const RememberUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxContainer = styled.TouchableOpacity<
  ICheckboxContainerProps
>`
  width: 20px;
  height: 20px;
  background-color: #ebebf0;
  border: ${(props) => (props.checked ? '6px solid #1B1B1F' : 'none')};
`;

export const RememberUserText = styled.Text`
  color: #737380;
  font-family: 'Archivo-Regular';
  font-size: 13px;
  margin-left: 10px;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  color: #737380;
  font-family: 'Archivo-Regular';
  font-size: 13px;
`;

export const TitleForm = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  color: #3d3d4d;
  font-family: 'Archivo-Bold';
`;
