import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Timeline from './Timeline';

describe('<Timeline>', () => {
  it('renders empty list', () => {
    const component = shallow(<Timeline />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with transactions', () => {
    const component = shallow(<Timeline
      transactions={[
          {
            id: 1,
            type: 'credit',
            amount: 10,
            description: 'he Beginner Archery and Beginner Crossbow',
            createdAt: '2018-03-20',
          },
          {
            id: 5,
            type: 'debit',
            amount: -140,
            description: 'he Beginner Archery and Beginner Crossbow',
            createdAt: '2018-03-20',
          },
        ]}
    />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
