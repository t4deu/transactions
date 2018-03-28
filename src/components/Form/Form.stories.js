import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Form from './Form';

storiesOf('Form', module)
  .add('Add Credit', () => (
    <Form title="Crédito" onBack={() => {}} onSubmit={() => {}} />
  ));
