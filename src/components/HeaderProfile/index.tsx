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
  EditProfile,
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
            <ButtonEditProfile onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={24} color="#AEAEB3" />
            </ButtonEditProfile>

            <TitleText>Editar Perfil</TitleText>
            <ItemEmpty />
          </HeaderWrapper>
        ) : (
          <HeaderWrapper>
            <ButtonEditProfile onPress={handleEditProfile}>
              <Icon name="edit-3" size={24} color="#AEAEB3" />
            </ButtonEditProfile>

            <TitleText>Perfil</TitleText>

            <ButtonLogout onPress={handleNavigation}>
              <Icon name="power" size={24} color="#AEAEB3" />
            </ButtonLogout>
          </HeaderWrapper>
        )}
      </Header>

      <InfoProfile>
        <ProfilePicture>
          <ImageProfile source={ProfileImage} />

          {enableEdit && (
            <EditProfile onPress={() => {}}>
              <Icon name="camera" color="#FFFFFF" size={20} />
            </EditProfile>
          )}
        </ProfilePicture>

        {!enableEdit && <ProfileNameText>Diego Alves de Souza</ProfileNameText>}
      </InfoProfile>
    </Container>
  );
};

export default HeaderProfile;
