import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface IButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC = ({ children }) => {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
