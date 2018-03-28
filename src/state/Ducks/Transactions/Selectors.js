// @flow
import type { Transactions, SortOrder } from './Types';

const getSortedTransactions = (transactions: Transactions, order: SortOrder): Transactions => {
  switch (order) {
    case 'ASC':
      return transactions.sort((a, b) => a.id - b.id);
    case 'DESC':
      return transactions.sort((a, b) => b.id - a.id);
    default:
      throw new Error(`Unknown sort order: ${order}`);
  }
};

export default {
  getSortedTransactions,
};
