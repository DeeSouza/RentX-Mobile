import React, { useEffect, useState } from 'react';

import CardCar from '../../components/CardCar';

import {
  Container,
  Header,
  HeaderWrapper,
  TitleText,
  AmountCarsText,
  ListWrapper,
  WrapperResultsCar,
  FlatListResults,
} from './styles';

export interface IResultProps {
  id: string;
  name: string;
}

const Agenda: React.FC = () => {
  const [results, setResults] = useState<IResultProps[]>([]);

  useEffect(() => {
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
      },
    ];
    setResults(DATA);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <TitleText>Agendamentos</TitleText>
          <AmountCarsText>5 períodos</AmountCarsText>
        </HeaderWrapper>
      </Header>

      <ListWrapper>
        <WrapperResultsCar>
          <FlatListResults
            renderItem={({ item }: { item: IResultProps }) => (
              <CardCar {...item} />
            )}
            data={results}
            keyExtractor={(item) => item.id}
          />
        </WrapperResultsCar>
      </ListWrapper>
    </Container>
  );
};

export default Agenda;
