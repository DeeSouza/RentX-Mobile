import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import CardCar from '../../components/CardCar';

import ProfileImage from '../../assets/cars/profile.png';

import {
  Container,
  ScrollViewContainer,
  Header,
  HeaderWrapper,
  TitleText,
  ButtonEditProfile,
  ButtonLogout,
  InfoProfile,
  ProfilePicture,
  ImageProfile,
  ProfileNameText,
  Appointments,
  WrapperAppointments,
  TitleAppointmentText,
  AmountText,
  FavoriteCar,
  WrapperFavoriteCar,
  TitleFavoriteCarText,
  AmountUsedCarText,
  Car,
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const handleEditProfile = useCallback(() => {
    console.log('Edit Profile');
  }, []);

  return (
    <Container>
      <ScrollViewContainer>
        <Header>
          <HeaderWrapper>
            <ButtonEditProfile onPress={handleEditProfile}>
              <Icon name="edit-3" size={24} color="#AEAEB3" />
            </ButtonEditProfile>
            <TitleText>Perfil</TitleText>
            <ButtonLogout onPress={() => navigation.navigate('SignOut')}>
              <Icon name="power" size={24} color="#AEAEB3" />
            </ButtonLogout>
          </HeaderWrapper>
        </Header>

        <InfoProfile>
          <ProfilePicture>
            <ImageProfile source={ProfileImage} style={{ borderRadius: 90 }} />
          </ProfilePicture>
          <ProfileNameText>Diego Alves de Souza</ProfileNameText>
        </InfoProfile>

        <Appointments>
          <WrapperAppointments>
            <TitleAppointmentText>Agendamentos feitos</TitleAppointmentText>
            <AmountText>05</AmountText>
          </WrapperAppointments>
        </Appointments>

        <FavoriteCar>
          <WrapperFavoriteCar>
            <TitleFavoriteCarText>Carro favorito</TitleFavoriteCarText>
            <AmountUsedCarText>Utilizado 2 vezes</AmountUsedCarText>
          </WrapperFavoriteCar>

          <Car>
            <CardCar id="123" name="Audi" />
          </Car>
        </FavoriteCar>
      </ScrollViewContainer>
    </Container>
  );
};

export default Profile;
