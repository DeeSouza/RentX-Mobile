import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

interface IDateValueProps {
  hasDate: boolean;
}

interface IButtonConfirmProps {
  disabled: boolean;
}

export const Container = styled.ScrollView.attrs({
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
})`
  flex: 1;
  padding-bottom: 20px;
  background-color: #fff;
`;

export const HeaderDate = styled.View`
  height: 292px;
  background-color: #1b1b1f;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 25px;
`;

export const HeaderDateText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: 'Archivo-SemiBold';
  width: 220px;
  line-height: 34px;
`;

export const GroupDateChoosed = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FromDate = styled.View`
  flex: 1;
  width: 120px;
`;

export const FromDateText = styled.Text`
  color: #7a7a80;
  font-size: 10px;
`;

export const ImageArrow = styled.View`
  align-items: center;
  width: 20px;
  margin: 0px 40px;
`;

export const ToDate = styled.View`
  flex: 1;
  width: 120px;
`;

export const ToDateText = styled.Text`
  color: #7a7a80;
  font-size: 10px;
`;

export const FromDateValue = styled.View<IDateValueProps>`
  margin-top: 10px;
  border-bottom-width: ${(props) => (props.hasDate ? '0px' : '1px')};
  border-color: rgba(253, 237, 239, 0.25);
  border-style: solid;
`;

export const FromDateValueText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'Archivo-Regular';
`;

export const ToDateValue = styled.View<IDateValueProps>`
  margin-top: 10px;
  border-bottom-width: ${(props) => (props.hasDate ? '0px' : '1px')};
  border-color: rgba(253, 237, 239, 0.25);
  border-style: solid;
`;

export const ToDateValueText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'Archivo-Regular';
`;

export const CalendarWrapper = styled.View`
  width: 100%;
  flex: 1;
  padding: 0;
  margin: 0;
`;

export const ButtonConfirm = styled.TouchableOpacity<IButtonConfirmProps>`
  height: 56px;
  background-color: #dc1637;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  width: 90%;
  margin: 58px auto;
  align-items: center;
  justify-content: center;
`;

export const ButtonConfirmText = styled.Text`
  font-family: 'Archivo-Regular';
  color: #fff;
  font-size: 15px;
`;
