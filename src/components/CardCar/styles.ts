import styled from 'styled-components/native';

export const Container = styled.View`
  height: 146px;
  background-color: #f4f5f6;
  margin-bottom: 16px;
  border-bottom-color: #ebebf0;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const DetailsCar = styled.View`
  padding: 24px 0px 24px 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 130px;
  height: 100%;
`;

export const ModelCarText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 10px;
  color: #aeaeb3;
`;

export const NameCarText = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 15px;
  color: #47474d;
`;

export const InfoRent = styled.View`
  width: 20%;
`;

export const PeriodText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 10px;
  color: #aeaeb3;
  margin-top: 16px;
`;

export const PriceText = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 15px;
  color: #dc1637;
`;

export const ImageFuelType = styled.Image`
  position: absolute;
  right: 0;
  bottom: 24px;
`;

export const WrapperImage = styled.View`
  padding: 24px 24px 24px 0px;
  align-items: flex-end;
  flex: 1;
  height: 100%;
`;
