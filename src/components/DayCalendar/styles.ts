import styled, { css } from 'styled-components/native';

interface IDayCalendarProps {
  startingDay?: boolean;
  endingDay?: boolean;
  interval?: boolean;
}

export const Day = styled.TouchableOpacity<IDayCalendarProps>`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  background-color: #ffffff;

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

export const DayText = styled.Text<IDayCalendarProps>`
  color: #000;

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
