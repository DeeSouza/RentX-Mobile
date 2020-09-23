import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const NextButton: React.FC = (props) => {
  return (
    <Container {...props}>
      <Icon name="navigate-next" size={30} color="#AEAEB3" />
    </Container>
  );
};

export default NextButton;
