import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FirstTransaction from './FirstTransaction';

describe('<FirstTransaction>', () => {
  it('renders without issues', () => {
    const component = shallow(<FirstTransaction onAddCredit={() => {}} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
