// @flow
import { ADD_TRANSACTION, SET_SORT_ORDER } from './Types';
import type { Action, SortOrder, TransactionType } from './Types';

export const addTransaction = (
  type: TransactionType,
  amount: number,
  description: string,
): Action => ({
  type: ADD_TRANSACTION,
  payload: {
    type,
    amount,
    description,
  },
});

export const setSortOrder = (sortOrder: SortOrder): Action => ({
  type: SET_SORT_ORDER,
  sort: sortOrder,
});
