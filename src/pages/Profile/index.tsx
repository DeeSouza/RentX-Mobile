import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CardCar from '../../components/CardCar';
import HeaderProfile from '../../components/HeaderProfile';

import {
  Container,
  ScrollViewContainer,
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

  return (
    <Container>
      <ScrollViewContainer>
        <HeaderProfile
          enableEdit={false}
          handleEditProfile={() => navigation.navigate('EditProfile')}
          handleNavigation={() => navigation.navigate('SignOut')}
        />

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
