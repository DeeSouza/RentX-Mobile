import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
`;

export const AskText = styled.Text`
  color: #dedee3;
  font-size: 15px;
  font-family: 'Archivo';
  font-weight: 300;
  text-align: center;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 120px;
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
