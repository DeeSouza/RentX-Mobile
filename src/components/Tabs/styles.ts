import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ITabProps {
  active?: boolean;
}

export const Container = styled.View`
  height: 38px;
  border-bottom-color: #ebebf0;
  border-bottom-width: 1px;
  margin: 36px 24px 0px;
  position: relative;
`;

export const WrapperTabs = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 280px;
  margin: auto;
`;

export const Tab = styled.TouchableOpacity<ITabProps>`
  height: 38px;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      border-bottom-color: #dc1637;
      border-bottom-width: 2px;
    `}
`;

export const TabText = styled.Text<ITabProps>`
  font-size: 20px;
  color: #aeaeb3;
  font-family: 'Archivo-Regular';

  ${(props) =>
    props.active &&
    css`
      color: #3d3d4d;
    `}
`;
