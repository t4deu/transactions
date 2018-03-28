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
  return moment(date).format();
}

export function toCurrency(value: number): string {
  return currency(value, currentSettings).format();
}
