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
  name: string;
}

interface ISignInFormPassword {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
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

  const formRefData = useRef<FormHandles>(null);
  const formRefPassword = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const currentPasswordInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmNewPasswordInputRef = useRef<TextInput>(null);

  const handleSubmitData: SubmitHandler<ISignInFormData> = async (data) => {
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
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRefData.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na Atualização',
        'Ocorreu um erro ao atualizar os dados. Tente novamente mais tarde.',
      );
    }
  };

  const handleSubmitPassword: SubmitHandler<ISignInFormPassword> = async (
    data,
  ) => {
    console.log(data);
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
            <Form onSubmit={handleSubmitData} ref={formRefData}>
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
                onSubmitEditing={() => formRefData.current?.submitForm()}
              />
            </Form>

            <FinalContainer>
              <Button onPress={() => formRefData.current?.submitForm()}>
                Salvar alterações
              </Button>
            </FinalContainer>
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
            <Form onSubmit={handleSubmitPassword} ref={formRefPassword}>
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
                name="newPassword"
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
                name="confirmNewPassword"
                placeholder="Repetir nova senha"
                secureTextEntry={secureTextEntry.confirmNewPassword}
                handleShowPassword={() =>
                  handleShowPassword('confirmNewPassword')
                }
                returnKeyType="send"
                ref={confirmNewPasswordInputRef}
                onSubmitEditing={() => formRefPassword.current?.submitForm()}
              />
            </Form>

            <FinalContainer hasPadding>
              <Button onPress={() => formRefPassword.current?.submitForm()}>
                Salvar alterações
              </Button>
            </FinalContainer>
          </WrapperForm>
        </WrapperForms>
      </WrapperContainer>
    </Container>
  );
};

export default EditProfile;
