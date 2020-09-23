import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import styles from './styles';
import contentPages from './content';

import NextButton from '../../components/OnBoarding/NextButton';
import Dots from '../../components/OnBoarding/Dots';

const OnBoard: React.FC = () => {
  return (
    <Onboarding
      pages={contentPages}
      containerStyles={styles.containerStyles}
      titleStyles={styles.titleStyles}
      subTitleStyles={styles.subTitleStyles}
      transitionAnimationDuration={100}
      bottomBarColor="transparent"
      bottomBarHighlight={false}
      showSkip={false}
      showDone={false}
      NextButtonComponent={NextButton}
      DotComponent={Dots}
    />
  );
};

export default OnBoard;
