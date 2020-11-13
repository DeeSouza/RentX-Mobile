import React from 'react';

import { Container, WrapperTabs, Tab, TabText } from './styles';

interface IHeaderProps {
  title: string;
  active: boolean;
  target: string;
}
interface IProps {
  onChangeTab(key: string): void;
  headers: IHeaderProps[];
}

const Tabs: React.FC<IProps> = ({ onChangeTab, headers }) => {
  return (
    <Container>
      <WrapperTabs>
        {headers.map((header) => (
          <Tab
            key={header.title}
            active={header.active}
            onPress={() => onChangeTab(header.target)}
          >
            <TabText active>{header.title}</TabText>
          </Tab>
        ))}
      </WrapperTabs>
    </Container>
  );
};

export default Tabs;
