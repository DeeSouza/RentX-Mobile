import styled, { css } from 'styled-components/native';

interface IDayCalendarProps {
  startingDay?: boolean;
  endingDay?: boolean;
  interval?: boolean;
  disabled?: boolean;
}

export const DayWrapper = styled.View<IDayCalendarProps>`
  width: 100%;
  height: 48px;
  padding: 0px;
  margin: 0px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}

  ${(props) =>
    (props.startingDay || props.endingDay) &&
    css`
      background-color: #dc1637;
    `}

  ${(props) =>
    props.interval &&
    (!props.startingDay || !props.endingDay) &&
    css`
      background-color: #fdedef;
    `}
`;

export const Day = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const DayText = styled.Text<IDayCalendarProps>`
  color: #000;
  font-weight: 500;

  ${(props) =>
    (props.startingDay || props.endingDay) &&
    css`
      color: #ffffff;
    `}

  ${(props) =>
    props.interval &&
    (!props.startingDay || !props.endingDay) &&
    css`
      color: #dc1637;
    `}
`;
