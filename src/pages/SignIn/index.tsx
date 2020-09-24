import React, { useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';

import Input from '../../components/Input';

import {
  Container,
  WrapperHeader,
  HeadingText,
  SubHeadingText,
  WrapperForm,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

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
          <HeadingText>Estamos quase lá.</HeadingText>
          <SubHeadingText>
            Faça seu login para começar uma experiência incrível.
          </SubHeadingText>
        </WrapperHeader>

        <WrapperForm>
          <Form onSubmit={handleSubmit} ref={formRef}>
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

            <Input
              icon="lock"
              name="password"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              ref={passwordInputRef}
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>
        </WrapperForm>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
