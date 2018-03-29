import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Transactions } from './Transactions';

describe('<Transactions>', () => {
  it('renders multiple transactions', () => {
    const component = shallow(<Transactions
      currentStatus={{
          debitTotal: -200,
          creditTotal: 4000,
          total: 3800,
          isSaver: true,
        }}
      hasTransactions
      sortOrder="ASC"
      transactions={[
          {
            id: 1,
            type: 'credit',
            amount: 10.5,
            description: 'Depósito poupança',
            createdAt: '2018-03-20',
          },
          {
            id: 2,
            type: 'debit',
            amount: -60,
            description: 'Confraria da Pizza',
            createdAt: '2018-03-20',
          },
        ]}
    />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders single transaction', () => {
    const component = shallow(<Transactions
      currentStatus={{
          debitTotal: -200,
          creditTotal: 4000,
          total: 3800,
          isSaver: true,
        }}
      hasTransactions
      sortOrder="ASC"
      transactions={[
          {
            id: 1,
            type: 'credit',
            amount: 10.5,
            description: 'Depósito poupança',
            createdAt: '2018-03-20',
          },
        ]}
    />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders without transactions', () => {
    const component = shallow(<Transactions transactions={[]} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
