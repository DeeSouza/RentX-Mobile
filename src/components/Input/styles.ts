import styled, { css } from 'styled-components/native';

interface IIconInputProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  height: 56px;
  margin-top: 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const IconInput = styled.View<IIconInputProps>`
  width: 56px;
  height: 56px;
  background-color: #f2f2fa;
  justify-content: center;
  align-items: center;
  margin-right: 2px;

  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid #dc1637;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid #e7e7e7;
    `}
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
