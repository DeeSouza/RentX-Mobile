import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';

import InputSearch from '../../components/InputSearch';

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
} from './styles';

interface IFormData {
  query: string;
}

const List: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log(data);
  };

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
          <SearchButtonSubmit onPress={() => {}}>
            <Icon name="search" size={20} color="#47474D" />
          </SearchButtonSubmit>
        </Search>
      </ListWrapper>
    </Container>
  );
};

export default List;
