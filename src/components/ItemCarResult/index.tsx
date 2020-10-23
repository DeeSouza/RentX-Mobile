import React from 'react';
import { Image } from 'react-native';

import Gasoline from '../../assets/icons/gasoline.png';
import Hybrid from '../../assets/icons/hybrid.png';
import Energy from '../../assets/icons/energy.png';

import LamboCar from '../../assets/cars/lambo.png';

import {
  Container,
  DetailsCar,
  InfoCar,
  ModelCarText,
  NameCarText,
  InfoRent,
  PeriodText,
  PriceText,
  GalleryImageCars,
  FuelType,
} from './styles';

import { IResultProps } from '../../pages/Main';

const ItemCarResult: React.FC<IResultProps> = () => {
  return (
    <Container>
      <DetailsCar>
        <InfoCar>
          <ModelCarText>LAMBORGHINI</ModelCarText>
          <NameCarText>Huracan</NameCarText>
        </InfoCar>

        <InfoRent>
          <PeriodText>AO DIA</PeriodText>
          <PriceText>R$ 260</PriceText>
        </InfoRent>
      </DetailsCar>

      <GalleryImageCars>
        <Image source={LamboCar} />
      </GalleryImageCars>

      <FuelType>
        <Image source={Gasoline} />
      </FuelType>
    </Container>
  );
};

export default ItemCarResult;
