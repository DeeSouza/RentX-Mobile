import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: #1b1b1f;
  align-items: center;
  justify-content: center;
`;

export const ImageBack = styled.View`
  position: absolute;
  width: 100%;
  top: 50px;
  left: 0;
`;

export const ImageLogout = styled.View`
  border-width: 8px;
  border-color: #29292e;
  justify-content: center;
  align-items: center;
  padding: 22px 18px;
  margin-top: auto;
`;

export const WrapperImage = styled.View`
  position: relative;
  width: 23px;
  height: 23px;
`;

export const ImageCloseLeft = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
`;

export const ImageCloseRight = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
`;

export const LogoutText = styled.Text`
  color: #e1e1e6;
  font-size: 30px;
  font-family: 'Archivo-SemiBold';
  text-align: center;
  margin: 36px 0px 16px;
`;

export const AskText = styled.Text`
  color: #a8a8b3;
  font-size: 15px;
  font-family: 'Archivo-Regular';
  text-align: center;
  width: 156px;
  line-height: 25px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 0px 24px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin: 0 8px;
  height: 56px;
  flex: 1;
  width: 156px;
  background-color: #dc1637;
  justify-content: center;
  align-items: center;
`;

export const ButtonLoginText = styled.Text`
  color: #fff;
  font-family: 'Archivo';
  font-size: 15px;
  font-weight: 500;
`;

export const ButtonRegister = styled.TouchableOpacity`
  height: 56px;
  width: 156px;
  flex: 1;
  background-color: #29292e;
  justify-content: center;
  align-items: center;
`;

export const ButtonRegisterText = styled.Text`
  color: #fff;
  font-family: 'Archivo';
  font-size: 15px;
  font-weight: 500;
`;
