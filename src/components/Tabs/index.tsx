import React from 'react';

import { Container, WrapperTabs, Tab, TabText } from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <WrapperTabs>
        <Tab active onPress={() => {}}>
          <TabText active>Dados</TabText>
        </Tab>

        <Tab onPress={() => {}}>
          <TabText>Trocar senha</TabText>
        </Tab>
      </WrapperTabs>
    </Container>
  );
};

export default Tabs;
