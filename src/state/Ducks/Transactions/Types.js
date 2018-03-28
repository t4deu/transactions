// @flow
export type Id = number;
export type TransactionType = 'credit' | 'debit';
export type DateString = string;

export type Transaction = {
  +id: Id,
  +type: TransactionType,
  +amount: number,
  +description: string,
  +createdAt: DateString,
};

export type Status = {
  +total: number,
  +creditTotal: number,
  +debitTotal: number,
  +isSaver: boolean,
}

export type Transactions = Array<Transaction>;

export type SortOrder = "DESC" | "ASC";

export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export type Action = { type: 'ADD_TRANSACTION', +payload: Transaction };
