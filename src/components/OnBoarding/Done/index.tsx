import React from 'react';

import {
  Container,
  AskText,
  WrapperButtons,
  ButtonLogin,
  ButtonLoginText,
  ButtonRegister,
  ButtonRegisterText,
} from './styles';

const Done: React.FC = () => {
  return (
    <Container>
      <AskText>O que você deseja fazer?</AskText>
      <WrapperButtons>
        <ButtonLogin onPress={() => {}}>
          <ButtonLoginText>Login</ButtonLoginText>
        </ButtonLogin>

        <ButtonRegister onPress={() => {}}>
          <ButtonRegisterText>Cadastro</ButtonRegisterText>
        </ButtonRegister>
      </WrapperButtons>
    </Container>
  );
};

export default Done;
