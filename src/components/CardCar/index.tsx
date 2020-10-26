import React from 'react';
import { Image } from 'react-native';

import AudiCar from '../../assets/cars/audi.png';
import Hybrid from '../../assets/icons/hybrid.png';
import ArrowRight from '../../assets/icons/arrow-right.png';

import { IResultProps } from '../../pages/List';

import {
  Container,
  Card,
  DetailsCar,
  ModelCarText,
  NameCarText,
  PeriodText,
  PriceText,
  WrapperImage,
  ImageFuelType,
  AgendaCar,
  AgendaCurrent,
  AgendaCurrentText,
  AgendaFuture,
  AgendaFutureText,
  AgendaDateStartText,
  AgendaDateEndText,
} from './styles';

const CardCar: React.FC<IResultProps> = () => {
  return (
    <Container>
      <Card>
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
      </Card>

      <AgendaCar>
        <AgendaCurrent>
          <AgendaCurrentText>
            Utilizando até 17 de Junho de 2020
          </AgendaCurrentText>
        </AgendaCurrent>

        {/* <AgendaFuture>
          <AgendaFutureText>PERÍODO</AgendaFutureText>
          <AgendaDateStartText>18 Junho 2020</AgendaDateStartText>
          <Image source={ArrowRight} />
          <AgendaDateEndText>12 Junho 2020</AgendaDateEndText>
        </AgendaFuture> */}
      </AgendaCar>
    </Container>
  );
};

export default CardCar;
