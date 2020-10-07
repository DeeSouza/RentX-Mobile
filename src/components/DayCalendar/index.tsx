import React from 'react';
import { DateObject, DayComponentProps } from 'react-native-calendars';

import { DayWrapper, Day, DayText } from './styles';

interface ICalendarDayProps extends DayComponentProps {
  onDayPress: (date: DateObject) => void;
}

const DayCalendar: React.FC<ICalendarDayProps> = ({
  date,
  onDayPress,
  marking,
  state,
}) => {
  return state === 'disabled' ? (
    <DayWrapper key={date.timestamp} {...marking} disabled>
      <DayText {...marking}>{date.day}</DayText>
    </DayWrapper>
  ) : (
    <DayWrapper key={date.timestamp} {...marking}>
      <Day onPress={() => onDayPress(date)}>
        <DayText {...marking}>{date.day}</DayText>
      </Day>
    </DayWrapper>
  );
};

export default DayCalendar;
