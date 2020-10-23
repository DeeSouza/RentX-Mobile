import React from 'react';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ItemCarResult from '../../components/ItemCarResult';
import NoResult from '../../components/NoResult';

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
  ImageArrow,
  WrapperResultsCar,
  WrapperFilter,
  TitleWrapperText,
  AmountResultText,
  FilterButton,
  FlatListResults,
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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

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

          <ImageArrow>
            <Icon name="keyboard-arrow-down" color="#7A7A80" size={25} />
          </ImageArrow>

          <ToDate>
            <ToDateText>ATÉ</ToDateText>
            <ToDateValue>
              <ToDateValueText>{toDate}</ToDateValueText>
            </ToDateValue>
          </ToDate>
        </GroupDateChoosed>
      </HeaderDate>

      {DATA.length > 0 ? (
        <WrapperResultsCar>
          <WrapperFilter>
            <TitleWrapperText>Resultados</TitleWrapperText>
            <AmountResultText>3 carros</AmountResultText>
            <FilterButton onPress={() => {}}>
              <Icon name="tune" color="#47474D" size={20} />
            </FilterButton>
          </WrapperFilter>

          <FlatListResults
            renderItem={ItemCarResult}
            data={DATA}
            keyExtractor={(item) => item.id}
          />
        </WrapperResultsCar>
      ) : (
        <NoResult />
      )}
    </Container>
  );
};

export default Main;
