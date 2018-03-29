import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Timeline from './Timeline';

storiesOf('Timeline', module)
.add('with multiple transactions', () => (
  <Timeline
    transactions={[
      { id: 1, type: 'credit', amount: 10.50, description: 'he Beginner Archery and Beginner Crossbow', createdAt: '2018-03-20' },
      { id: 2, type: 'debit', amount: -60, description: 'he Beginner Archery and Beginner Crossbow', createdAt: '13/02/2018' },
      { id: 3, type: 'credit', amount: 115.90, description: 'Crossbow course does not require you to bring any equipment', createdAt: '10:00' },
      { id: 4, type: 'debit', amount: -13.1, description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a ne', createdAt: '09:30' },
      { id: 5, type: 'debit', amount: -140, description: 'he Beginner Archery and Beginner Crossbow', createdAt: '2018-03-20' },
      { id: 6, type: 'credit', amount: 10, description: 'teams of eleven players with a spherical ball', createdAt: '2018-03-20' },
    ]}
  />
))
.add('with a single transaction', () => (
  <Timeline
    transactions={[
      { id: 1, type: 'credit', amount: 10, description: 'he Beginner Archery and Beginner Crossbow', createdAt: '2018-03-20' },
    ]}
  />
))
.add('without transactions', () => <Timeline />);
  
