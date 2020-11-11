import React, { useState, useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  View,
} from 'react-native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as yup from 'yup';

import Tabs from '../../components/Tabs';
import HeaderProfile from '../../components/HeaderProfile';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  WrapperForm,
  FinalContainer,
  WrapperContainer,
} from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const EditProfile: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

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

  return (
    <Container>
      <WrapperContainer>
        <HeaderProfile enableEdit />

        <Tabs />

        <WrapperForm>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              icon="person"
              name="name"
              placeholder="Nome de Usuário"
              autoCorrect={false}
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />

            <Input
              icon="email"
              name="email"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>
        </WrapperForm>

        <FinalContainer>
          <Button onPress={() => formRef.current?.submitForm()}>
            Salvar alterações
          </Button>
        </FinalContainer>
      </WrapperContainer>
    </Container>
  );
};

export default EditProfile;
