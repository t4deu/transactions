// @flow
import React, { Children } from 'react';

import { ThemeProvider } from 'react-native-material-ui';

type Props = {
  children: Children,
};

const uiTheme = {};

const Main = (props: Props) => <ThemeProvider uiTheme={uiTheme}>{props.children}</ThemeProvider>;

export default Main;
