import React, { useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as yup from 'yup';

import Input from '../../../components/Input';

import getValidationErrors from '../../../utils/getValidationErrors';

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
  name: string;
  email: string;
}

const SignUpFirstStep: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleNext: SubmitHandler<FormData> = async (data) => {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        name: yup.string().required('Nome obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      navigation.navigate('SignUpSecondStep');
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
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

          <Form onSubmit={handleNext} ref={formRef}>
            <Input
              icon="person"
              name="name"
              placeholder="Nome Completo"
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

            <ButtonNext onPress={() => formRef.current?.submitForm()}>
              <ButtonNextText>Próximo</ButtonNextText>
            </ButtonNext>
          </Form>
        </WrapperForm>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUpFirstStep;
