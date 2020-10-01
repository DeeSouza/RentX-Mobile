import React from 'react';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const BackLeftButton: React.FC<StackHeaderLeftButtonProps> = (props) => {
  return (
    <Container {...props}>
      <Icon name="arrow-back-ios" color="#AEAEB3" size={20} />
    </Container>
  );
};

export default BackLeftButton;
