import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, NotFound, NotFoundText } from './styles';

const NoResult: React.FC = () => (
  <Container>
    <NotFound>
      <Icon name="car" size={40} color="#000" />

      <NotFoundText>Nenhum resultado encontrado</NotFoundText>
    </NotFound>
  </Container>
);

export default NoResult;
