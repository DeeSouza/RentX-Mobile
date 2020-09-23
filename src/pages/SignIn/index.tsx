import React from 'react';

import {
  Container,
  WrapperHeader,
  HeadingText,
  SubHeadingText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <WrapperHeader>
        <HeadingText>Estamos quase lá.</HeadingText>
        <SubHeadingText>
          Faça seu login para começar uma experiência incrível.
        </SubHeadingText>
      </WrapperHeader>
    </Container>
  );
};

export default SignIn;
