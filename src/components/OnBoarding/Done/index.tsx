import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  return (
    <Container>
      <AskText>O que você deseja fazer?</AskText>
      <WrapperButtons>
        <ButtonLogin onPress={() => navigation.navigate('SignIn')}>
          <ButtonLoginText>Login</ButtonLoginText>
        </ButtonLogin>

        <ButtonRegister onPress={() => navigation.navigate('SignUp')}>
          <ButtonRegisterText>Cadastro</ButtonRegisterText>
        </ButtonRegister>
      </WrapperButtons>
    </Container>
  );
};

export default Done;
