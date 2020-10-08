import React, { useCallback } from 'react';
import { getDay } from 'date-fns';
import { DateObject, DayComponentProps } from 'react-native-calendars';

import { DayWrapper, Day, DayText } from './styles';

interface ICalendarDayProps extends DayComponentProps {
  onLongPress: (date: DateObject) => void;
}

const DayCalendar: React.FC<ICalendarDayProps> = ({
  date,
  onLongPress,
  marking,
  state,
}) => {
  const handleDayWeek = useCallback((timestamp: number): boolean => {
    const dayWeek = getDay(timestamp);
    if (dayWeek === 5 || dayWeek === 6) return true;

    return false;
  }, []);

  return state === 'disabled' || handleDayWeek(date.timestamp) ? (
    <DayWrapper key={date.timestamp} {...marking} disabled>
      <DayText {...marking}>{date.day}</DayText>
    </DayWrapper>
  ) : (
    <DayWrapper key={date.timestamp} {...marking}>
      <Day onPress={() => onLongPress(date)}>
        <DayText {...marking}>{date.day}</DayText>
      </Day>
    </DayWrapper>
  );
};

export default DayCalendar;
