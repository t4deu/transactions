import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TransactionForm from './Form';

describe('<Form>', () => {
  it('renders without issues', () => {
    const component = shallow(<TransactionForm title="Crédito" onBack={() => {}} onSubmit={() => {}} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
