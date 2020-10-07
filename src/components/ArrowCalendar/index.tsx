import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

interface IArrowCalendarProps {
  direction: string;
}

const ArrowCalendar: React.FC<IArrowCalendarProps> = ({ direction }) => {
  return (
    <Container direction={direction}>
      {direction === 'left' ? (
        <Icon name="arrow-back-ios" size={15} color="#7A7A80" />
      ) : (
        <Icon name="arrow-forward-ios" size={15} color="#7A7A80" />
      )}
    </Container>
  );
};

export default ArrowCalendar;
