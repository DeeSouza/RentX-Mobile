import React from 'react';
import OnBoardImage from '../../components/OnBoardImage';

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
    title: 'Seja\nbem-vindo',
    subtitle: 'O que você deseja fazer?',
    titleStyles: {
      textAlign: 'center',
      color: '#F4F5F6',
    },
    subTitleStyles: {
      textAlign: 'center',
      color: '#DEDEE3',
    },
  },
];
