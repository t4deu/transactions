// @flow
import React from 'react';

import { ThemeProvider } from 'react-native-material-ui';

type Props = {
  children: any,
};

const uiTheme = {
  fontFamily: 'System',
};

const Main = (props: Props) => <ThemeProvider uiTheme={uiTheme}>{props.children}</ThemeProvider>;

export default Main;
