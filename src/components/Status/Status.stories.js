import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import Status from './Status';

storiesOf('Status', module)
  .addDecorator(story => <View style={{ flex: 1, marginTop: 200 }}>{story()}</View>)
  .add('Saver', () => (
    <Status
      currentStatus={{
        debitTotal: -200,
        creditTotal: 4000,
        total: 3800,
        isSaver: true,
      }}
    />
  ))
  .add('Spender', () => (
    <Status
      currentStatus={{
        debitTotal: -1500,
        creditTotal: 200,
        total: -1300,
        isSaver: false,
      }}
    />
  ));
