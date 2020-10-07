import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Calendar, LocaleConfig, DateObject } from 'react-native-calendars';
import { parseISO, eachDayOfInterval, format, isBefore } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import DayCalendar from '../../components/DayCalendar';
import ArrowDate from '../../assets/icons/arrow-date.png';

import {
  Container,
  HeaderDate,
  HeaderDateText,
  GroupDateChoosed,
  FromDate,
  FromDateText,
  ToDate,
  ToDateText,
  ImageArrow,
  FromDateValue,
  FromDateValueText,
  ToDateValue,
  ToDateValueText,
  CalendarWrapper,
} from './styles';

interface IIntervalDates {
  [key: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    interval?: boolean;
  };
}

const ChooseDateAndFindCar: React.FC = () => {
  LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan.',
      'Fev.',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul.',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI.', 'SEX', 'SAB'],
  };

  LocaleConfig.defaultLocale = 'pt-br';

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const [formatFromDate, setFormatFromDate] = useState<Date | null>(null);
  const [formatToDate, setFormatToDate] = useState<Date | null>(null);
  const [markedDates, setMarkedDates] = useState<IIntervalDates>({});

  const onDayPress = useCallback(
    (date: DateObject): void => {
      const dateSelected = parseISO(date.dateString);
      const dateFormatHuman = format(dateSelected, 'dd MMMM yyyy', {
        locale: ptBr,
      });

      if (!fromDate || (fromDate && toDate)) {
        setFromDate(dateFormatHuman);

        if (fromDate && toDate) {
          setMarkedDates({
            [date.dateString]: {
              startingDay: true,
            },
          });

          setToDate('');
          setFormatToDate(null);
        } else {
          setMarkedDates((state) => ({
            ...state,
            [date.dateString]: {
              startingDay: true,
            },
          }));
        }

        setFormatFromDate(dateSelected);
      }

      if (fromDate && !toDate) {
        if (formatFromDate && isBefore(dateSelected, formatFromDate)) {
          return;
        }

        setToDate(dateFormatHuman);

        setMarkedDates((state) => ({
          ...state,
          [date.dateString]: {
            endingDay: true,
          },
        }));

        setFormatToDate(dateSelected);
      }
    },
    [fromDate, toDate, formatFromDate],
  );

  useEffect(() => {
    if (formatFromDate && formatToDate) {
      const intervalDates = eachDayOfInterval({
        start: formatFromDate,
        end: formatToDate,
      });

      const intervalDatesMarked = {} as IIntervalDates;
      intervalDates.forEach((value, key) => {
        if (key > 0 && key < intervalDates.length - 1) {
          intervalDatesMarked[format(value, 'yyyy-MM-dd')] = {
            interval: true,
          };
        }
      });

      setMarkedDates((state) => ({
        ...state,
        ...intervalDatesMarked,
      }));
    }
  }, [toDate, formatFromDate, formatToDate]);

  return (
    <Container>
      <HeaderDate>
        <HeaderDateText>
          Escolha a{'\n'}data e encontre{'\n'}um carro.
        </HeaderDateText>

        <GroupDateChoosed>
          <FromDate>
            <FromDateText>DE</FromDateText>
            <FromDateValue hasDate={!!fromDate}>
              <FromDateValueText>{fromDate}</FromDateValueText>
            </FromDateValue>
          </FromDate>

          <ImageArrow>
            <Image source={ArrowDate} />
          </ImageArrow>

          <ToDate>
            <ToDateText>ATÉ</ToDateText>
            <ToDateValue hasDate={!!toDate}>
              <ToDateValueText>{toDate}</ToDateValueText>
            </ToDateValue>
          </ToDate>
        </GroupDateChoosed>
      </HeaderDate>

      <CalendarWrapper>
        <Calendar
          dayComponent={(props) => (
            <DayCalendar {...props} onDayPress={onDayPress} />
          )}
          current="2020-10-01"
          minDate="2020-10-10"
          markedDates={markedDates}
          markingType="period"
          theme={{
            calendarBackground: '#FFFFFF',
            'stylesheet.calendar.main': {
              container: {
                marginHorizontal: 0,
                paddingHorizontal: 0,
              },
              week: {
                marginTop: 2,
                marginBottom: 0,
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
            },
          }}
        />
      </CalendarWrapper>
    </Container>
  );
};

export default ChooseDateAndFindCar;
