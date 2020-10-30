import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
  ProfileNameText,
  ItemEmpty,
} from './styles';

interface IProps {
  handleEditProfile?: () => void;
  handleNavigation?: () => void;
  enableEdit: boolean;
}

const HeaderProfile: React.FC<IProps> = ({
  handleEditProfile,
  handleNavigation,
  enableEdit,
}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        {enableEdit ? (
          <HeaderWrapper>
            <ButtonEditProfile onPress={handleEditProfile}>
              <Icon name="edit-3" size={24} color="#AEAEB3" />
            </ButtonEditProfile>
            <TitleText>Perfil</TitleText>
            <ButtonLogout onPress={handleNavigation}>
              <Icon name="power" size={24} color="#AEAEB3" />
            </ButtonLogout>
          </HeaderWrapper>
        ) : (
          <HeaderWrapper>
            <ButtonEditProfile onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={24} color="#AEAEB3" />
            </ButtonEditProfile>
            <TitleText>Editar Perfil</TitleText>
            <ItemEmpty />
          </HeaderWrapper>
        )}
      </Header>

      <InfoProfile>
        <ProfilePicture>
          <ImageProfile source={ProfileImage} style={{ borderRadius: 90 }} />
        </ProfilePicture>

        {enableEdit && <ProfileNameText>Diego Alves de Souza</ProfileNameText>}
      </InfoProfile>
    </Container>
  );
};

export default HeaderProfile;
