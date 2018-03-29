import 'react';

import { addTransaction, setSortOrder } from './Actions';
import { ADD_TRANSACTION, SET_SORT_ORDER } from './Types';

describe('Transactions Actions', () => {
  describe('addTransaction', () => {
    it('creates an action to add a new transaction', () => {
      const params = {
        type: 'credit',
        amount: 10,
        description: 'Some Description',
      };
      const expectedAction = {
        type: ADD_TRANSACTION,
        payload: params,
      };

      expect(addTransaction(params)).toEqual(expectedAction);
    });
  });

  describe('setSortOrder', () => {
    it('creates an action to sort in ascending order', () => {
      const params = 'ASC';
      const expectedAction = {
        type: SET_SORT_ORDER,
        sort: 'ASC',
      };

      expect(setSortOrder(params)).toEqual(expectedAction);
    });

    it('creates an action to sort in descending order', () => {
      const params = 'DESC';
      const expectedAction = {
        type: SET_SORT_ORDER,
        sort: 'DESC',
      };

      expect(setSortOrder(params)).toEqual(expectedAction);
    });
  });
});
