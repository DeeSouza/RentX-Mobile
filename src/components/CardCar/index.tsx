import React from 'react';
import { Image } from 'react-native';

import AudiCar from '../../assets/cars/audi.png';
import Hybrid from '../../assets/icons/hybrid.png';

import { IResultProps } from '../../pages/List';

import {
  Container,
  DetailsCar,
  ModelCarText,
  NameCarText,
  PeriodText,
  PriceText,
  WrapperImage,
  ImageFuelType,
} from './styles';

const CardCar: React.FC<IResultProps> = () => {
  return (
    <Container>
      <DetailsCar>
        <ModelCarText>AUDI</ModelCarText>
        <NameCarText>RS 5 Coupé</NameCarText>

        <PeriodText>AO DIA</PeriodText>
        <PriceText>R$ 120</PriceText>

        <ImageFuelType source={Hybrid} width={16} />
      </DetailsCar>

      <WrapperImage>
        <Image source={AudiCar} height={85} />
      </WrapperImage>
    </Container>
  );
};

export default CardCar;
