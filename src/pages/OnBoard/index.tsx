import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import styles from './styles';
import contentPages from './content';

const OnBoard: React.FC = () => {
  return (
    <Onboarding
      containerStyles={styles.containerStyles}
      titleStyles={styles.titleStyles}
      subTitleStyles={styles.subTitleStyles}
      pages={contentPages}
    />
  );
};

export default OnBoard;
