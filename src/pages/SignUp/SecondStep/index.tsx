import React, { useState, useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {
  Container,
  WrapperHeader,
  HeadingText,
  SubHeadingText,
  WrapperForm,
  TitleForm,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignUpSecondStep: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleShowPassword = useCallback(() => {
    setSecureTextEntry((state) => !state);
  }, []);

  const handleShowConfirmPassword = useCallback(() => {
    setSecureTextEntryConfirm((state) => !state);
  }, []);

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
          <TitleForm>2. Senha</TitleForm>

          <Form onSubmit={handleSubmit} ref={formRef}>
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

            <Input
              icon="lock"
              isPassword
              name="password"
              placeholder="Repetir Senha"
              secureTextEntry={secureTextEntryConfirm}
              handleShowPassword={handleShowConfirmPassword}
              returnKeyType="send"
              ref={passwordInputRef}
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button>Cadastrar</Button>
          </Form>
        </WrapperForm>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUpSecondStep;
