import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import OnBoardImage from '../../components/OnBoardImage';

import { Container } from './styles';

const OnBoard: React.FC = () => {
  return (
    <Container>
      <Onboarding
        containerStyles={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          paddingHorizontal: 32,
          marginTop: 0,
          marginBottom: 0,
          paddingBottom: 0,
          paddingTop: 0,
        }}
        imageContainerStyles={{
          width: '100%',
          paddingHorizontal: 12,
        }}
        titleStyles={{
          fontSize: 40,
          alignSelf: 'flex-start',
          marginHorizontal: 0,
          color: '#47474D',
          textAlign: 'left',
          fontFamily: 'Archivo-Bold',
          width: 230,
          marginTop: 36,
        }}
        subTitleStyles={{
          fontSize: 15,
          textAlign: 'left',
          fontFamily: 'Archivo-Regular',
          lineHeight: 25,
          color: '#7a7a80',
          width: 195,
        }}
        pages={[
          {
            backgroundColor: '#FFFFFF',
            image: <OnBoardImage image={1} />,
            title: 'Primeiro, escolha a data',
            subtitle:
              'Você é quem define um período, e nós mostraremos os carros disponíveis.',
          },
          {
            backgroundColor: '#FFFFFF',
            image: <OnBoardImage image={2} />,
            title: 'Depois, escolha o carro',
            subtitle:
              'Vários modelos para você dirigir seguro, com conforto e segurança.',
          },
          {
            backgroundColor: '#1B1B1F',
            image: <OnBoardImage image={2} />,
            title: 'Seja bem-vindo.',
            subtitle: 'O que você deseja fazer?',
            titleStyles: {
              textAlign: 'center',
              alignSelf: 'center',
              marginRight: 0,
              color: '#F4F5F6',
              fontFamily: 'Archivo-Bold',
              fontSize: 40,
              lineHeight: 44,
            },
            subTitleStyles: {
              textAlign: 'center',
              alignSelf: 'center',
              width: '100%',
              color: '#DEDEE3',
              fontSize: 15,
              fontFamily: 'Archivo-Regular',
            },
          },
        ]}
      />
    </Container>
  );
};

export default OnBoard;
