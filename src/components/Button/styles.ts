import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: #dc1637;
  justify-content: center;
  align-items: center;
  height: 56px;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  color: #fff;
`;
