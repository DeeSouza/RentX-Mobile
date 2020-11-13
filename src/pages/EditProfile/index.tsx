import React, { useState, useCallback, useRef } from 'react';
import { TextInput, Alert, Dimensions, Easing, Animated } from 'react-native';
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
  WrapperForms,
  FinalContainer,
  WrapperContainer,
} from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

interface IPasswordSecure {
  [field: string]: boolean;
}

const EditProfile: React.FC = () => {
  const { width: screenWidth } = Dimensions.get('window');

  const [animatedFormData] = useState(new Animated.Value(0));
  const [secureTextEntry, setSecureTextEntry] = useState({
    password: true,
    newPassword: true,
    confirmNewPassword: true,
  } as IPasswordSecure);
  const [headerTabs, setHeaderTabs] = useState([
    {
      title: 'Dados',
      active: true,
      target: 'formData',
    },
    {
      title: 'Trocar senha',
      active: false,
      target: 'formPassword',
    },
  ]);

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const currentPasswordInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmNewPasswordInputRef = useRef<TextInput>(null);

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

  const handleShowPassword = useCallback((field) => {
    setSecureTextEntry((state) => ({
      ...state,
      [field]: !state[field],
    }));
  }, []);

  const handleChangeTab = useCallback(
    (form: string) => {
      setHeaderTabs((state) =>
        state.map((tab) => ({ ...tab, active: tab.target === form })),
      );

      Animated.timing(animatedFormData, {
        toValue: form === 'formData' ? 0 : -screenWidth,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    [animatedFormData, screenWidth],
  );

  return (
    <Container>
      <WrapperContainer>
        <HeaderProfile enableEdit />

        <Tabs headers={headerTabs} onChangeTab={handleChangeTab} />

        <WrapperForms>
          <WrapperForm
            as={Animated.View}
            style={{
              transform: [
                {
                  translateX: animatedFormData,
                },
              ],
            }}
          >
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

          <WrapperForm
            as={Animated.View}
            style={{
              transform: [
                {
                  translateX: animatedFormData,
                },
              ],
            }}
          >
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input
                icon="lock"
                isPassword
                name="password"
                placeholder="Senha atual"
                secureTextEntry={secureTextEntry.password}
                handleShowPassword={() => handleShowPassword('password')}
                returnKeyType="next"
                ref={currentPasswordInputRef}
                onSubmitEditing={() => newPasswordInputRef.current?.focus()}
              />

              <Input
                icon="lock"
                isPassword
                name="password"
                placeholder="Nova senha"
                secureTextEntry={secureTextEntry.newPassword}
                handleShowPassword={() => handleShowPassword('newPassword')}
                returnKeyType="next"
                ref={newPasswordInputRef}
                onSubmitEditing={() =>
                  confirmNewPasswordInputRef.current?.focus()
                }
              />

              <Input
                icon="lock"
                isPassword
                name="password"
                placeholder="Repetir nova senha"
                secureTextEntry={secureTextEntry.confirmNewPassword}
                handleShowPassword={() =>
                  handleShowPassword('confirmNewPassword')
                }
                returnKeyType="send"
                ref={confirmNewPasswordInputRef}
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
          </WrapperForm>
        </WrapperForms>

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
