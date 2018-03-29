// @flow
import moment from 'moment/min/moment-with-locales';
import currency from 'currency.js';

moment.locale('pt-BR');
const currentSettings = {
  decimal: ',',
  symbol: 'R$ ',
  formatWithSymbol: true,
};

export function today(format: string = 'dddd, DD [de] MMMM'): string {
  return moment().format(format);
}

export function humanDate(date: string): string {
  const time = moment(date);
  const weekAgo = moment().subtract(7, 'days');

  if (time.isSame(moment(), 'day')) {
    return 'Hoje';
  } else if (time.isAfter(weekAgo)) {
    return time.format('DDDD');
  }

  return time.format('DD/MM/YY');
}

export function toCurrency(value: number): string {
  return currency(value, currentSettings).format();
}
