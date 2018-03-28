import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ListItem from './ListItem';

storiesOf('Timeline item', module)
  .add('with Credit', () => (
    <ListItem
      transaction={{
        id: 1,
        type: 'credit',
        amount: 10.5,
        description: 'Depósito poupança',
        createdAt: '10:30',
      }}
    />
  ))
  .add('with Debit', () => (
    <ListItem
      transaction={{
        id: 1,
        type: 'debit',
        amount: 50.9,
        description: 'Confraria da Pizza',
        createdAt: '10:30',
      }}
    />
  ))
  .add('is last item', () => (
    <ListItem
      last
      transaction={{
        id: 1,
        type: 'credit',
        amount: 10.5,
        description: 'Depósito poupança',
        createdAt: '10:30',
      }}
    />
  ));;
