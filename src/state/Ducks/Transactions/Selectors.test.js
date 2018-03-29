import 'react';

import { getSortedTransactions, getTransactionsStatus } from './Selectors';

describe('Transactions Selectors', () => {
  const transactions = [
    {
      id: 1, type: 'credit', amount: 10.5, description: 'Depósito', createdAt: '2018-03-20',
    },
    {
      id: 3, type: 'credit', amount: 115.9, description: 'Depósito', createdAt: '10:00',
    },
    {
      id: 4, type: 'debit', amount: -13.1, description: 'Mercado', createdAt: '09:30',
    },
  ];

  describe('getSortedTransactions', () => {
    it('sort transactions in ascending order', () => {
      const expectedOrder = [1, 3, 4];

      const sorted = getSortedTransactions(transactions, 'ASC').map((item) => item.id);

      expect(sorted).toEqual(expectedOrder);
    });

    it('sort transactions in descending order', () => {
      const expectedOrder = [4, 3, 1];

      const sorted = getSortedTransactions(transactions, 'DESC').map((item) => item.id);

      expect(sorted).toEqual(expectedOrder);
    });
  });

  describe('getTransactionsStatus', () => {
    it('calculates the current status for saver', () => {
      const expectedStatus = {
        total: 113.3,
        creditTotal: 126.4,
        debitTotal: -13.1,
        isSaver: true,
      };

      expect(getTransactionsStatus(transactions)).toEqual(expectedStatus);
    });

    it('calculates the current status for spender', () => {
      const spenderTransactions = [
        ...transactions,
        {
          id: 5, type: 'debit', amount: -150, description: 'Mercado', createdAt: '09:30',
        },
      ];
      const expectedStatus = {
        total: -36.7,
        creditTotal: 126.4,
        debitTotal: -163.1,
        isSaver: false,
      };

      expect(getTransactionsStatus(spenderTransactions)).toEqual(expectedStatus);
    });
  });
});
