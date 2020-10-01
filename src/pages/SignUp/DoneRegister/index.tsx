import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ImageBackgroundLogo from '../../../assets/icons/rentx-gray.png';

import {
  Container,
  AccountCreatedText,
  GreetingsText,
  CheckedDone,
  ButtonDone,
  ButtonDoneText,
  ImageBack,
} from './styles';

const DoneRegister: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageBack>
        <Image
          source={ImageBackgroundLogo}
          resizeMode="stretch"
          style={{
            width: '100%',
          }}
        />
      </ImageBack>

      <CheckedDone>
        <Icon name="done" color="#03B252" size={35} />
      </CheckedDone>
      <AccountCreatedText>Conta criada!</AccountCreatedText>
      <GreetingsText>Agora é só fazer login e aproveitar.</GreetingsText>

      <ButtonDone onPress={() => navigation.navigate('SignIn')}>
        <ButtonDoneText>Ok</ButtonDoneText>
      </ButtonDone>
    </Container>
  );
};

export default DoneRegister;
