import React, { useRef, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';

import InputSearch from '../../components/InputSearch';
import CardCar from '../../components/CardCar';

import {
  Container,
  Header,
  HeaderWrapper,
  TitleText,
  AmountCarsText,
  ListWrapper,
  Search,
  SearchField,
  SearchButtonSubmit,
  WrapperResultsCar,
  FlatListResults,
} from './styles';

interface IFormData {
  query: string;
}

export interface IResultProps {
  id: string;
  name: string;
}

const List: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [results, setResults] = useState<IResultProps[]>([]);

  const handleSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log(data);
  };

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
          <TitleText>Listagem</TitleText>
          <AmountCarsText>12 Carros</AmountCarsText>
        </HeaderWrapper>
      </Header>

      <ListWrapper>
        <Search>
          <SearchField>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <InputSearch
                name="query"
                placeholder="Qual carro você procura?"
                autoCorrect={false}
                returnKeyType="search"
              />
            </Form>
          </SearchField>
          <SearchButtonSubmit onPress={() => formRef.current?.submitForm()}>
            <Icon name="search" size={20} color="#47474D" />
          </SearchButtonSubmit>
        </Search>

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

export default List;
