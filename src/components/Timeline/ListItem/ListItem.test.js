import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListItem from './ListItem';

describe('<ListItem>', () => {
  it('renders without issues', () => {
    const transaction = {
      id: 1,
      type: 'credit',
      amount: 10,
      description: 'he Beginner Archery and Beginner Crossbow',
      createdAt: '10:30',
    };
    const component = shallow(<ListItem transaction={transaction} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
