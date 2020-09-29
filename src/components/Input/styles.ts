import styled from 'styled-components/native';

export const Container = styled.View`
  height: 56px;
  margin-top: 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const IconInput = styled.View`
  width: 56px;
  height: 56px;
  background-color: #f2f2fa;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`;

export const TextInput = styled.TextInput`
  background-color: #f2f2fa;
  height: 56px;
  flex: 1;
  width: 100%;
  color: #aeaeb3;
  font-family: 'Archivo-Regular';
  font-size: 15px;
  padding: 0px 60px 0px 23px;
`;

export const ViewPassword = styled.TouchableOpacity`
  position: absolute;
  right: 30px;
`;
