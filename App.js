import React from 'react';

import StorybookUI from './storybook';
import Entry from './src/Entry';

export default class App extends React.Component {
  render() {
    return __DEV__ ? <StorybookUI /> : <Entry />;
  }
}
