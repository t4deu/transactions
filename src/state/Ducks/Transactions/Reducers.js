// @flow
import { combineReducers } from 'redux';

import { nextId, currentTime, parseNumber } from './Utils';

import { ADD_TRANSACTION, SET_SORT_ORDER } from './Types';
import type { Transactions, Transaction, Action, SortOrder } from './Types';

/* state shape
transactionsState {
  transactions: [],
  sortOrder: "DESC"
} */

function createTransaction(state: Transactions, action): Transaction {
  const { type, amount, description } = action.payload;
  const validAmount = parseNumber(amount);
  const signedAmount = type === 'debit' ? -validAmount : validAmount;

  return {
    id: nextId(state),
    createdAt: currentTime(),
    amount: signedAmount,
    type,
    description,
  };
}

const transactions = (state: Transactions = [], action: Action): Transactions => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [...state, createTransaction(state, action)];
    default:
      return state;
  }
};

const sortOrder = (state: SortOrder = 'DESC', action: Action): SortOrder => {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.sort;
    default:
      return state;
  }
};

const transactionsReducer = combineReducers({
  transactions,
  sortOrder,
});

export default transactionsReducer;
