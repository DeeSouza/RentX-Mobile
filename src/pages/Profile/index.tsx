import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import ProfileImage from '../../assets/cars/profile.png';

import {
  Container,
  Header,
  HeaderWrapper,
  TitleText,
  ButtonEditProfile,
  ButtonLogout,
  InfoProfile,
  ProfilePicture,
  ImageProfile,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <ButtonEditProfile onPress={() => {}}>
            <Icon name="edit-3" size={24} color="#AEAEB3" />
          </ButtonEditProfile>
          <TitleText>Perfil</TitleText>
          <ButtonLogout onPress={() => {}}>
            <Icon name="power" size={24} color="#AEAEB3" />
          </ButtonLogout>
        </HeaderWrapper>
      </Header>

      <InfoProfile>
        <ProfilePicture>
          <ImageProfile source={ProfileImage} style={{ borderRadius: 90 }} />
        </ProfilePicture>
      </InfoProfile>
    </Container>
  );
};

export default Profile;
