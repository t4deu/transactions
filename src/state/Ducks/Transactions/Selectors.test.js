import 'react';

import Selectors from './Selectors';

describe('Transactions Selectors', () => {
  describe('getSortedTransactions', () => {
    const transactions = [
      {
        id: 1, type: 'credit', amount: 10.5, description: 'Depósito', createdAt: '10:30',
      },
      {
        id: 3, type: 'credit', amount: 115.9, description: 'Depósito', createdAt: '10:00',
      },
      {
        id: 4, type: 'debit', amount: -13.1, description: 'Mercado', createdAt: '09:30',
      },
    ];

    it('sort transactions in ascending order', () => {
      const expectedOrder = [1, 3, 4];

      const sorted = Selectors.getSortedTransactions(transactions, 'ASC').map((item) => item.id);

      expect(sorted).toEqual(expectedOrder);
    });

    it('sort transactions in descending order', () => {
      const expectedOrder = [4, 3, 1];

      const sorted = Selectors.getSortedTransactions(transactions, 'DESC').map((item) => item.id);

      expect(sorted).toEqual(expectedOrder);
    });
  });
});
