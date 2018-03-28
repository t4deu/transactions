import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Transactions from './Transactions';

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
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '10:30' },
        { id: 2, type: 'debit', amount: -60, description: 'Confraria da Pizza', createdAt: '13/02/2018' },
        { id: 3, type: 'credit', amount: 115.90, description: 'Depósito poupança', createdAt: '10:00' },
        { id: 4, type: 'debit', amount: -13.1, description: 'Confraria da Pizza', createdAt: '09:30' },
        { id: 5, type: 'debit', amount: -140, description: 'Depósito poupança', createdAt: '10:30' },
        { id: 6, type: 'credit', amount: 10, description: 'Confraria da Pizza', createdAt: '10:30' },
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
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '10:30' },
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
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '10:30' },
        { id: 2, type: 'debit', amount: -60, description: 'Confraria da Pizza', createdAt: '13/02/2018' },
        { id: 3, type: 'credit', amount: 115.90, description: 'Depósito poupança', createdAt: '10:00' },
        { id: 4, type: 'debit', amount: -13.1, description: 'Confraria da Pizza', createdAt: '09:30' },
        { id: 5, type: 'debit', amount: -140, description: 'Depósito poupança', createdAt: '10:30' },
        { id: 6, type: 'credit', amount: 10, description: 'Confraria da Pizza', createdAt: '10:30' },
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
        { id: 1, type: 'credit', amount: 10.50, description: 'Depósito poupança', createdAt: '10:30' },
        { id: 2, type: 'debit', amount: -60, description: 'Confraria da Pizza', createdAt: '13/02/2018' },
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
