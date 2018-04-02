// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export const ADD_TRANSACTION = 'TRANSACTION/ADD_TRANSACTION';
export const SET_SORT_ORDER = 'TRANSACTION/SET_SORT_ORDER';

export type TransactionType = 'credit' | 'debit';
export type DateString = string;
export type SortOrder = 'DESC' | 'ASC';

export type Transaction = {
  +id: number,
  +type: TransactionType,
  +amount: number,
  subtotal: number,
  +description: string,
  +createdAt: DateString,
};

export type TransactionPayload = {
  +type: TransactionType,
  +amount: string,
  +description: string,
};

export type Status = {
  +total: number,
  +creditTotal: number,
  +debitTotal: number,
  +isSaver: boolean,
};

export type Transactions = Array<Transaction>;

export type transactionsState = {
  +transactions: Transactions,
  +sortOrder: SortOrder,
};

export type Action =
  | {
      type: 'TRANSACTION/ADD_TRANSACTION',
      payload: TransactionPayload,
    }
  | { type: 'TRANSACTION/SET_SORT_ORDER', +sort: SortOrder };

export type Store = ReduxStore<transactionsState, Action>;
export type Dispatch = ReduxDispatch<Action>;
