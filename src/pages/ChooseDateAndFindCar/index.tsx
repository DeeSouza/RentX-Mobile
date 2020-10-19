import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Calendar, LocaleConfig, DateObject } from 'react-native-calendars';
import { parseISO, eachDayOfInterval, format, isBefore } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import ArrowCalendar from '../../components/ArrowCalendar';
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
  ButtonConfirm,
  ButtonConfirmText,
} from './styles';

interface IIntervalDates {
  [key: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    interval?: boolean;
  };
}

const ChooseDateAndFindCar: React.FC = () => {
  const navigation = useNavigation();

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

  const handleConfirmDates = useCallback(() => {
    navigation.navigate('Main', {
      fromDate,
      toDate,
      formatFromDate: JSON.stringify(formatFromDate),
      formatToDate: JSON.stringify(formatToDate),
    });
  }, [navigation, fromDate, formatFromDate, toDate, formatToDate]);

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
            <DayCalendar {...props} onLongPress={onDayPress} />
          )}
          renderArrow={(direction) => <ArrowCalendar direction={direction} />}
          current={new Date().getTime()}
          minDate={new Date().getTime()}
          markedDates={markedDates}
          markingType="period"
          theme={{
            calendarBackground: '#FFFFFF',
            'stylesheet.calendar.header': {
              header: {
                marginVertical: 15,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              },
              monthText: {
                fontSize: 20,
                color: '#47474D',
                fontFamily: 'Archivo-SemiBold',
                justifyContent: 'flex-start',
                marginRight: 'auto',
              },
              week: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingBottom: 15,
                marginBottom: 15,
                borderBottomColor: '#EBEBF0',
                borderBottomWidth: 1,
              },
            },
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

      <ButtonConfirm
        onPress={handleConfirmDates}
        disabled={!fromDate || !toDate}
      >
        <ButtonConfirmText>Confirmar</ButtonConfirmText>
      </ButtonConfirm>
    </Container>
  );
};

export default ChooseDateAndFindCar;
