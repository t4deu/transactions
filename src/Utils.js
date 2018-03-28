// @flow
import moment from 'moment/min/moment-with-locales';

moment.locale('pt-BR');

export function today(format:string = 'dddd, DD [de] MMMM'):string {
  return moment().format(format);
}

export function humanDate(date:string):string {
  return moment(date).format();
}