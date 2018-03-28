import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Controls from './Controls';

describe('<Controls>', () => {
  it('renders without issues', () => {
    const component = shallow(<Controls title="Crédito" onAddCredit={() => {}} onAddDebit={() => {}} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
