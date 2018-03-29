import 'react';

import reducer from './Reducers';
import { currentTime } from './Utils';
import { ADD_TRANSACTION, SET_SORT_ORDER } from './Types';

describe('Transactions Reducers', () => {
  it('returns the initial state', () => {
    const expectedState = {
      transactions: [],
      sortOrder: 'DESC',
    };

    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('handles ADD_TRANSACTION', () => {
    const newTransaction = {
      type: 'credit',
      amount: 10,
      description: 'Some Description',
    };
    const currentState = {
      sortOrder: 'DESC',
      transactions: [
        {
          id: 1,
          type: 'debit',
          amount: -5,
          description: 'I say',
          createdAt: '2018-01-15',
        },
      ],
    };
    const expectedState = {
      sortOrder: 'DESC',
      transactions: [
        ...currentState.transactions,
        {
          id: 2,
          createdAt: currentTime(),
          ...newTransaction,
        },
      ],
    };
    const action = {
      type: ADD_TRANSACTION,
      payload: newTransaction,
    };

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('handles ADD_TRANSACTION for debits', () => {
    const newTransaction = {
      type: 'debit',
      amount: '10,5',
      description: 'Some Description',
    };
    const currentState = {
      sortOrder: 'DESC',
      transactions: [],
    };
    const expectedState = {
      sortOrder: 'DESC',
      transactions: [
        ...currentState.transactions,
        {
          ...newTransaction,
          id: 0,
          createdAt: currentTime(),
          amount: -10.5,
        },
      ],
    };
    const action = {
      type: ADD_TRANSACTION,
      payload: newTransaction,
    };

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('handles SET_SORT_ORDER', () => {
    const currentState = {
      sortOrder: 'DESC',
      transactions: [],
    };
    const expectedState = {
      sortOrder: 'ASC',
      transactions: [],
    };
    const action = {
      type: SET_SORT_ORDER,
      sort: 'ASC',
    };

    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
