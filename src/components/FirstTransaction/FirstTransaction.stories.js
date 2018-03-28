import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import FirstTransactions from './FirstTransaction';

storiesOf('FirstTransactions', module)
  .addDecorator(story => <View style={{ flex: 1, marginTop: 20 }}>{story()}</View>)
  .add('Credit', () => (
    <FirstTransactions onAddCredit={() => {}} />
  ));
