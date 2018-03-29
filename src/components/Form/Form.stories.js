import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Form from './Form';

storiesOf('Form', module)
  .add('Add Credit', () => (
    <Form type="credit" active onBack={() => {}} onSubmit={() => {}} />
  ))
  .add('Add Debit', () => (
    <Form type="debit" active onBack={() => {}} onSubmit={() => {}} />
  ));
