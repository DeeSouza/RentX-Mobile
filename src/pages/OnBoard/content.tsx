import React from 'react';
import OnBoardImage from '../../components/OnBoarding/Image';
import Done from '../../components/OnBoarding/Done';

export default [
  {
    backgroundColor: '#FFFFFF',
    image: <OnBoardImage image={1} />,
    title: 'Primeiro, escolha a\ndata',
    subtitle:
      'Você é quem define um\nperíodo, e nós mostraremos\nos carros disponíveis.',
  },
  {
    backgroundColor: '#FFFFFF',
    image: <OnBoardImage image={2} />,
    title: 'Depois, \nescolha o\ncarro',
    subtitle:
      'Vários modelos para você\ndirigir seguro, com conforto\ne segurança.',
  },
  {
    backgroundColor: '#1B1B1F',
    image: <OnBoardImage image={3} position="center" />,
    title: 'Seja\nBem-vindo',
    subtitle: <Done />,
    titleStyles: {
      textAlign: 'center',
      color: '#F4F5F6',
    },
  },
];
