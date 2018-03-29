import React from 'react';
import { storiesOf } from '@storybook/react-native';

import TransactionForm from './Form';

storiesOf('Form', module)
  .add('Add Credit', () => <TransactionForm type="credit" active onBack={() => {}} onSubmit={() => {}} />)
  .add('Add Debit', () => <TransactionForm type="debit" active onBack={() => {}} onSubmit={() => {}} />);
