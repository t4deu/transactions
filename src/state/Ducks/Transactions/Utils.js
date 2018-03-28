// @flow
import moment from 'moment';
import type { Transactions } from './Types';

export function nextId(state: Transactions): number {
  return state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
}

export function currentTime(): string {
  return moment().format('YYYY-MM-DD');
}