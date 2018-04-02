// @flow
import currency from 'currency.js';

import type { Transactions, SortOrder, Status } from './Types';

export const getSortedTransactions = (
  transactions: Transactions,
  order: SortOrder,
): Transactions => {
  switch (order) {
    case 'ASC':
      return transactions.sort((a, b) => a.id - b.id);
    case 'DESC':
      return transactions.sort((a, b) => b.id - a.id);
    default:
      throw new Error(`Unknown sort order: ${order}`);
  }
};

export const getTransactionsWithSubTotal = (transactions: Transactions): Transactions => {
  return transactions.map((transaction) => {
    const subtotal = transactions
      .filter(item => transaction.id >= item.id)
      .map(item => item.amount)
      .reduce((total, current) => currency(total).value + currency(current).value, currency(0));

    return {
      ...transaction,
      subtotal,
    };
  }).sort((a, b) => a.id - b.id);
};

export const getTransactionsStatus = (transactions: Transactions): Status => {
  const credits = transactions.filter(transaction => transaction.type === 'credit');
  const debits = transactions.filter(transaction => transaction.type === 'debit');
  const creditTotal = credits.reduce(
    (total, transaction) =>
      // avoid float precision issues
      total.add(transaction.amount),
    currency(0),
  );
  const debitTotal = debits.reduce(
    (total, transaction) =>
      // avoid float precision issues
      total.add(transaction.amount),
    currency(0),
  );
  const total = currency(creditTotal).add(debitTotal);
  const isSaver = total.value > 0;

  return {
    creditTotal: creditTotal.value,
    debitTotal: debitTotal.value,
    total: total.value,
    isSaver,
  };
};
