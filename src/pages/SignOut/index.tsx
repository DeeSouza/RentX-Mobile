import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ImageXLeft from '../../assets/icons/x-left.png';
import ImageXRight from '../../assets/icons/x-right.png';
import ImageBackgroundLogo from '../../assets/icons/rentx-gray.png';

import {
  Container,
  ImageLogout,
  WrapperImage,
  ImageCloseLeft,
  ImageCloseRight,
  LogoutText,
  AskText,
  WrapperButtons,
  ButtonLogin,
  ButtonLoginText,
  ButtonRegister,
  ButtonRegisterText,
  ImageBack,
} from './styles';

const SignOut: React.FC = () => {
  const navigation = useNavigation();

  const handleLogout = useCallback(() => {
    console.log('Logout');
  }, []);

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

      <ImageLogout style={{ borderRadius: 5 }}>
        <WrapperImage>
          <ImageCloseLeft source={ImageXLeft} width={23} height={23} />
          <ImageCloseRight source={ImageXRight} width={23} height={23} />
        </WrapperImage>
      </ImageLogout>
      <LogoutText>Sair do RENTX</LogoutText>
      <AskText>Tem certeza que quer fazer isso?</AskText>

      <WrapperButtons>
        <ButtonLogin onPress={() => navigation.navigate('Main')}>
          <ButtonLoginText>Não</ButtonLoginText>
        </ButtonLogin>

        <ButtonRegister onPress={handleLogout}>
          <ButtonRegisterText>Sim</ButtonRegisterText>
        </ButtonRegister>
      </WrapperButtons>
    </Container>
  );
};

export default SignOut;
