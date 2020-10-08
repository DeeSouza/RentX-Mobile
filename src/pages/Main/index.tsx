import React from 'react';
import { RouteProp } from '@react-navigation/native';

import {
  Container,
  HeaderDate,
  GroupDateChoosed,
  FromDate,
  FromDateText,
  ToDate,
  ToDateText,
  FromDateValue,
  FromDateValueText,
  ToDateValue,
  ToDateValueText,
} from './styles';

type RootStackParamList = {
  Main: {
    formatFromDate: Date;
    formatToDate: Date;
    fromDate: string;
    toDate: string;
  };
};

type MainScreenRouteProps = RouteProp<RootStackParamList, 'Main'>;

interface IMainProps {
  route: MainScreenRouteProps;
}

const Main: React.FC<IMainProps> = ({ route }) => {
  const { fromDate, toDate, formatFromDate, formatToDate } = route.params;

  return (
    <Container>
      <HeaderDate>
        <GroupDateChoosed>
          <FromDate>
            <FromDateText>DE</FromDateText>
            <FromDateValue>
              <FromDateValueText>{fromDate}</FromDateValueText>
            </FromDateValue>
          </FromDate>

          <ToDate>
            <ToDateText>ATÉ</ToDateText>
            <ToDateValue>
              <ToDateValueText>{toDate}</ToDateValueText>
            </ToDateValue>
          </ToDate>
        </GroupDateChoosed>
      </HeaderDate>
    </Container>
  );
};

export default Main;
