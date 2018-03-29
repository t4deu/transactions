// @flow
// external imports
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';
// store & types
import configureStore from './state/Store';
import { Store } from './state/Ducks/Transactions/Types';
// containers & components
import SortedTransactions from './containers/Transactions/Transactions';

const reduxStore: Store = configureStore();
const uiTheme = {};

export default class Entry extends React.Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <ThemeProvider uiTheme={uiTheme}>
          <SortedTransactions />
        </ThemeProvider>
      </ReduxProvider>
    );
  }
}
