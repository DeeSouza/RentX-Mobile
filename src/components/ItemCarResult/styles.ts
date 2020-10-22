import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f4f5f6;
  height: 240px;
  width: 100%;
  margin-bottom: 16px;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const DetailsCar = styled.View`
  padding: 24px 24px 0px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoCar = styled.View`
  flex: 1;
  width: 80%;
`;

export const ModelCarText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 10px;
  color: #aeaeb3;
`;

export const NameCarText = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 20px;
  color: #47474d;
`;

export const InfoRent = styled.View`
  width: 20%;
`;

export const PeriodText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 10px;
  color: #aeaeb3;
`;

export const PriceText = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 20px;
  color: #dc1637;
`;

export const GalleryImageCars = styled.View`
  width: 100%;
  height: 120px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FuelType = styled.View`
  padding: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
