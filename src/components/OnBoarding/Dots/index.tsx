import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

interface IProps {
  selected: boolean;
}

const Dots: React.FC<IProps> = ({ selected }) => (
  <Container>
    <Icon name="circle" color={selected ? '#47474D' : '#AEAEB3'} size={8} />
  </Container>
);

export default Dots;
