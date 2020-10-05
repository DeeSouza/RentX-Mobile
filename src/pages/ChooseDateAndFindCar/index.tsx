import React, { useState } from 'react';
import { Image } from 'react-native';

import ArrowDate from '../../assets/icons/arrow-date.png';

import {
  Container,
  HeaderDate,
  HeaderDateText,
  GroupDateChoosed,
  FromDate,
  FromDateText,
  ToDate,
  ToDateText,
  ImageArrow,
  FromDateValue,
  FromDateValueText,
  ToDateValue,
  ToDateValueText,
} from './styles';

const ChooseDateAndFindCar: React.FC = () => {
  const [fromDate, setFromDate] = useState('07 Agosto 2020');
  const [toDate, setToDate] = useState('17 Agosto 2020');

  return (
    <Container>
      <HeaderDate>
        <HeaderDateText>
          Escolha a{'\n'}data e encontre{'\n'}um carro.
        </HeaderDateText>

        <GroupDateChoosed>
          <FromDate>
            <FromDateText>DE</FromDateText>
            <FromDateValue hasDate={!!fromDate}>
              <FromDateValueText>{fromDate}</FromDateValueText>
            </FromDateValue>
          </FromDate>

          <ImageArrow>
            <Image source={ArrowDate} />
          </ImageArrow>

          <ToDate>
            <ToDateText>ATÉ</ToDateText>
            <ToDateValue hasDate={!!toDate}>
              <ToDateValueText>{toDate}</ToDateValueText>
            </ToDateValue>
          </ToDate>
        </GroupDateChoosed>
      </HeaderDate>
    </Container>
  );
};

export default ChooseDateAndFindCar;
