import React from 'react';
import { DateObject, DayComponentProps } from 'react-native-calendars';
import { Text } from 'react-native';

import { Day, DayText } from './styles';

interface ICalendarDayProps extends DayComponentProps {
  onDayPress: (date: DateObject) => void;
}

const DayCalendar: React.FC<ICalendarDayProps> = ({
  date,
  onDayPress,
  marking,
}) => {
  return (
    <Day key={date.timestamp} onPress={() => onDayPress(date)} {...marking}>
      <DayText {...marking}>{date.day}</DayText>
    </Day>
  );
};

export default DayCalendar;
