import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Transactions } from './Transactions';

storiesOf('Transactions', module)
  .add('Saver with transactions', () => (
    <Transactions
      currentStatus={{
        debitTotal: -200,
        creditTotal: 4000,
        total: 3800,
        isSaver: true,
      }}
      hasTransactions
      sortOrder="ASC"
      transactions={[
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '2018-03-20' },
        { id: 2, type: 'debit', amount: -60, description: 'Confraria da Pizza', createdAt: '2018-03-20' },
        { id: 3, type: 'credit', amount: 115.90, description: 'Depósito poupança', createdAt: '2018-03-20' },
        { id: 4, type: 'debit', amount: -13.1, description: 'Confraria da Pizza', createdAt: '2018-03-20' },
        { id: 5, type: 'debit', amount: -140, description: 'Depósito poupança', createdAt: '2018-03-20' },
        { id: 6, type: 'credit', amount: 10, description: 'Confraria da Pizza', createdAt: '2018-03-20' },
      ]}
    />
  ))
  .add('Saver with single transaction', () => (
    <Transactions
      currentStatus={{
        debitTotal: -200,
        creditTotal: 4000,
        total: 3800,
        isSaver: true,
      }}
      hasTransactions
      sortOrder="ASC"
      transactions={[
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '2018-03-20' },
      ]}
    />
  ))
  .add('Spender with transactions', () => (
    <Transactions
      currentStatus={{
        debitTotal: 200,
        creditTotal: -4000,
        total: -3800,
        isSaver: false,
      }}
      hasTransactions
      sortOrder="ASC"
      transactions={[
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '2018-03-20' },
        { id: 2, type: 'debit', amount: -60, description: 'Confraria da Pizza', createdAt: '2018-03-20' },
        { id: 3, type: 'credit', amount: 115.90, description: 'Depósito poupança', createdAt: '2018-03-20' },
        { id: 4, type: 'debit', amount: -13.1, description: 'Confraria da Pizza', createdAt: '2018-03-20' },
        { id: 5, type: 'debit', amount: -140, description: 'Depósito poupança', createdAt: '2018-03-20' },
        { id: 6, type: 'credit', amount: 10, description: 'Confraria da Pizza', createdAt: '2018-03-20' },
      ]}
    />
  ))
  .add('Spender reverse order', () => (
    <Transactions
      currentStatus={{
        debitTotal: 200,
        creditTotal: -4000,
        total: -3800,
        isSaver: false,
      }}
      hasTransactions
      sortOrder="DESC"
      transactions={[
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '2018-03-20' },
        { id: 2, type: 'debit', amount: -60, description: 'Confraria da Pizza', createdAt: '2018-03-20' },
      ]}
    />
  ))
  .add('Without transactions', () => (
    <Transactions
      currentStatus={{
        debitTotal: 0,
        creditTotal: 0,
        total: 0,
        isSaver: true,
      }}
      transactions={[]}
    />
  ));
