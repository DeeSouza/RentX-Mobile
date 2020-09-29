import React, { useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';

import Input from '../../../components/Input';

import {
  Container,
  WrapperHeader,
  HeadingText,
  SubHeadingText,
  WrapperForm,
  TitleForm,
  ButtonNext,
  ButtonNextText,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignUpFirstStep: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <WrapperHeader>
          <HeadingText>Crie sua conta.</HeadingText>
          <SubHeadingText>
            Faça seu cadastro de forma rápida e fácil.
          </SubHeadingText>
        </WrapperHeader>

        <WrapperForm>
          <TitleForm>1. Dados</TitleForm>

          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              icon="person"
              name="name"
              placeholder="Nome Completo"
              autoCorrect={false}
              autoCapitalize="words"
              returnKeyType="next"
            />

            <Input
              icon="email"
              name="email"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <ButtonNext onPress={() => navigation.navigate('SignUpSecondStep')}>
              <ButtonNextText>Próximo</ButtonNextText>
            </ButtonNext>
          </Form>
        </WrapperForm>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUpFirstStep;
