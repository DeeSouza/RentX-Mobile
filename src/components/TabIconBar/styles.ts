import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 52px;
  border-top-width: 1px;
  border-top-color: #ebebf0;
  background-color: #fff;
`;

export const IconTab = styled.TouchableOpacity`
  width: 25%;
  justify-content: center;
  align-items: center;
  height: 25px;
  position: relative;
`;

export const TraceLine = styled.View`
  background-color: #dc1637;
  width: 4px;
  height: 2px;
  position: absolute;
  bottom: -10px;
`;
