import React, { useState, useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as yup from 'yup';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import getValidationErrors from '../../../utils/getValidationErrors';

import {
  Container,
  WrapperHeader,
  HeadingText,
  SubHeadingText,
  WrapperForm,
  TitleForm,
} from './styles';

interface SignUpFormData {
  password: string;
  passwordConfirm: string;
}

const SignUpSecondStep: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

  const formRef = useRef<FormHandles>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const handleSubmit: SubmitHandler<SignUpFormData> = async (data) => {
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
        'Erro no Cadastro',
        'Ocorreu um erro ao fazer o cadastro. Verifique as credenciais.',
      );
    }
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
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            />

            <Input
              icon="lock"
              isPassword
              name="password"
              placeholder="Repetir Senha"
              secureTextEntry={secureTextEntryConfirm}
              handleShowPassword={handleShowConfirmPassword}
              returnKeyType="send"
              ref={confirmPasswordInputRef}
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Cadastrar
            </Button>
          </Form>
        </WrapperForm>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUpSecondStep;
