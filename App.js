import React from 'react';

import StorybookUI from './storybook';
import Entry from './src/Entry';

const App = () => (__DEV__ ? <StorybookUI /> : <Entry />);

export default App;
