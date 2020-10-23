import React, { useState, useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

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
  CheckboxContainer,
} from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit: SubmitHandler<ISignInFormData> = async (data) => {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na Autenticação',
        'Ocorreu um erro ao fazer login. Verifique as credenciais.',
      );
    }
  };

  const handleShowPassword = useCallback(() => {
    setSecureTextEntry((state) => !state);
  }, []);

  const handleRememberMe = useCallback(() => {
    setRememberMe((state) => !state);
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
                <CheckboxContainer
                  checked={rememberMe}
                  onPress={handleRememberMe}
                />
                <RememberUserText>Lembrar-me</RememberUserText>
              </RememberUser>
              <ForgotPassword onPress={() => {}}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>
            </WrapperRememberAndForgot>

            <Button onPress={() => formRef.current?.submitForm()}>Login</Button>
          </Form>
        </WrapperForm>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
