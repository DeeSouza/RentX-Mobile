import React from 'react';
import { Image } from 'react-native';

import CalendarImage from '../../assets/icons/calendar.png';
import CarImage from '../../assets/icons/car.png';
import RentxImage from '../../assets/icons/rentx.png';

import StepOne from '../../assets/icons/01.png';
import StepTwo from '../../assets/icons/02.png';

import { Container } from './styles';

interface IProps {
  image: 1 | 2 | 3;
  position?: string;
}

const OnBoardImage: React.FC<IProps> = ({ image, position = '' }) => {
  const images = {
    1: {
      icon: CalendarImage,
      step: StepOne,
    },
    2: {
      icon: CarImage,
      step: StepTwo,
    },
    3: {
      icon: RentxImage,
      step: null,
    },
  };

  return (
    <Container positionImage={position}>
      <Image source={images[image].icon} />
      {images[image].step && <Image source={images[image].step} />}
    </Container>
  );
};

export default OnBoardImage;
