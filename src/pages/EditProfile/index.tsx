import React from 'react';

import HeaderProfile from '../../components/HeaderProfile';

import { Container, ScrollViewContainer } from './styles';

const EditProfile: React.FC = () => {
  return (
    <Container>
      <ScrollViewContainer>
        <HeaderProfile enableEdit={false} />
      </ScrollViewContainer>
    </Container>
  );
};

export default EditProfile;
