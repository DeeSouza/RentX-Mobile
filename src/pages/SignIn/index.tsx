import React, { useState, useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  WrapperHeader,
  HeadingText,
  SubHeadingText,
  WrapperForm,
  RememberUser,
  RememberUserText,
  ForgotPassword,
  ForgotPasswordText,
  WrapperRememberAndForgot,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleShowPassword = useCallback(() => {
    setSecureTextEntry((state) => !state);
  }, []);

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
              isPassword
              name="password"
              placeholder="Senha"
              secureTextEntry={secureTextEntry}
              handleShowPassword={handleShowPassword}
              returnKeyType="send"
              ref={passwordInputRef}
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <WrapperRememberAndForgot>
              <RememberUser>
                <RememberUserText>Lembrar-me</RememberUserText>
              </RememberUser>
              <ForgotPassword onPress={() => {}}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>
            </WrapperRememberAndForgot>

            <Button>Login</Button>
          </Form>
        </WrapperForm>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
