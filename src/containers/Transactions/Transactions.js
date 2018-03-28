// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import type {
  SortOrder,
  Status as CurrentStatus,
  Transactions as TransactionsList,
} from '../../state/Ducks/Transactions/Types';

import Timeline from '../../components/Timeline/Timeline';
import FirstTransaction from '../../components/FirstTransaction/FirstTransaction';
import Controls from '../../components/Controls/Controls';
import Status from '../../components/Status/Status';

import styles from './Transactions.styles';

type Props = {
  transactions: TransactionsList,
  currentStatus: CurrentStatus,
  hasTransactions: boolean,
  sortOrder: SortOrder,
};

export default class Transactions extends Component<Props> {
  newCredit = () => {};
  newDebit = () => {};

  tollbarAction() {
    if (!this.props.hasTransactions) {
      return {};
    }

    return (this.props.sortOrder === 'ASC') ? {
      actions: ['file-upload']
    } : {
      actions: ['file-download']
    };
  }

  renderStatus() {
    return <Status currentStatus={this.props.currentStatus} />;
  }

  renderContent() {
    if (!this.props.hasTransactions) {
      return <FirstTransaction onAddCredit={this.newCredit} onAddDebit={this.newDebit} />;
    }

    return (
      <View style={styles.container}>
        <Timeline header={this.renderStatus()} transactions={this.props.transactions} />
        <Controls onAddCredit={this.newCredit} onAddDebit={this.newDebit} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar centerElement="Transações" rightElement={this.tollbarAction()} />
        {this.renderContent()}
      </View>
    );
  }
}
