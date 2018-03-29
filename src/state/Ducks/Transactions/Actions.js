// @flow
import { ADD_TRANSACTION, SET_SORT_ORDER } from './Types';
import type { Action, SortOrder, TransactionPayload } from './Types';

export const addTransaction = (payload:TransactionPayload): Action => ({
  type: ADD_TRANSACTION,
  payload,
});

export const setSortOrder = (sortOrder: SortOrder): Action => ({
  type: SET_SORT_ORDER,
  sort: sortOrder,
});
