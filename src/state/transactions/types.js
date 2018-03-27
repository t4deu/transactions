// @flow

export type Id = number;
export type TransactionType = 'credit' | 'debit';
export type DateString = string;

export type Transaction = {
  +id: Id,
  +type: TransactionType,
  +amount: number,
  +description: string,
  +createdAt: DateString
};

export type Transactions = Array<Transaction>;
