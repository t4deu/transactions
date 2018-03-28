import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import Controls from './Controls';

storiesOf('Controls', module)
  .addDecorator(story => <View style={{ flex: 1, marginTop: 200 }}>{story()}</View>)
  .add('Actions', () => <Controls onAddCredit={() => {}} onAddDebit={() => {}} />);
