import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Form from './Form';

describe('<Form>', () => {
  it('renders without issues', () => {
    const component = shallow(<Form title="Crédito" onBack={() => {}} onSubmit={() => {}} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
