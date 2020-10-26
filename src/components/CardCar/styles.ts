import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const Card = styled.View`
  border-bottom-color: #ebebf0;
  border-bottom-width: 1px;
  height: 146px;
  background-color: #f4f5f6;
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

export const AgendaCar = styled.View`
  height: 40px;
  border-bottom-color: #ebebf0;
  border-bottom-width: 1px;
  margin-top: 2px;
`;

export const AgendaCurrent = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #daf3e5;
`;

export const AgendaCurrentText = styled.Text`
  color: #03b252;
  font-family: 'Archivo-SemiBold';
  font-size: 15px;
`;

export const AgendaFuture = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #f4f5f6;
  padding: 0px 24px;
  flex: 1;
`;

export const AgendaFutureText = styled.Text`
  color: #aeaeb3;
  font-family: 'Archivo-SemiBold';
  font-size: 10px;
`;

export const AgendaDateStartText = styled.Text`
  color: #47474d;
  font-family: 'Archivo-Regular';
  font-size: 13px;
`;

export const AgendaDateEndText = styled.Text`
  color: #47474d;
  font-family: 'Archivo-Regular';
  font-size: 13px;
`;
