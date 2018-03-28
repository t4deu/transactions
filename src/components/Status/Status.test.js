import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Status from './Status';

describe('<Status>', () => {
  it('renders without issues for saver', () => {
    const component = shallow(<Status
      currentStatus={{
          debitTotal: -200,
          creditTotal: 4000,
          total: 3800,
          isSaver: true,
        }}
    />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders without issues for spender', () => {
    const component = shallow(<Status
      currentStatus={{
          debitTotal: 200,
          creditTotal: -4000,
          total: -3800,
          isSaver: false,
        }}
    />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
