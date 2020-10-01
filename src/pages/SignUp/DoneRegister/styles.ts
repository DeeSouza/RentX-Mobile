import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: #1b1b1f;
  padding-bottom: 80px;
`;

export const AccountCreatedText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: 'Archivo-Medium';
  margin-top: 45px;
`;

export const GreetingsText = styled.Text`
  color: #a8a8b3;
  font-size: 15px;
  margin-top: 16px;
  width: 155px;
  text-align: center;
  line-height: 25px;
`;

export const CheckedDone = styled.View`
  width: 60px;
  height: 66px;
  border: 8px solid #29292e;
  justify-content: center;
  align-items: center;
`;

export const ButtonDone = styled.TouchableOpacity`
  width: 80px;
  height: 56px;
  background-color: #29292e;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const ButtonDoneText = styled.Text`
  color: #fff;
  font-family: 'Archivo-Regular';
  font-size: 15px;
`;

export const ImageBack = styled.View`
  position: absolute;
  width: 100%;
  top: 50px;
  left: 0;
`;
