import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: #dc1637;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  height: 56px;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  color: #fff;
`;
