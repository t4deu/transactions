// @flow
// external imports
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toolbar } from 'react-native-material-ui';
// types
import type {
  SortOrder,
  TransactionType,
  TransactionPayload,
  Status as CurrentStatus,
  Transactions as TransactionsList,
} from '../../state/Ducks/Transactions/Types';
// actions & selectors
import { addTransaction, setSortOrder } from '../../state/Ducks/Transactions/Actions';
import {
  getSortedTransactions,
  getTransactionsStatus,
} from '../../state/Ducks/Transactions/Selectors';
// containers & components
import Controls from '../../components/Controls/Controls';
import FirstTransaction from '../../components/FirstTransaction/FirstTransaction';
import TransactionForm from '../../components/Form/Form';
import Status from '../../components/Status/Status';
import Timeline from '../../components/Timeline/Timeline';
// styles
import styles from './Transactions.styles';

type Props = {
  transactions: TransactionsList,
  currentStatus: CurrentStatus,
  hasTransactions: boolean,
  addTransaction: Function,
  setSortOrder: Function,
  sortOrder: SortOrder,
};

type State = {
  formActive: boolean,
  formType: TransactionType,
};

export class Transactions extends Component<Props, State> {
  state = {
    formActive: false,
    formType: 'credit',
  };

  addTransaction = (payload: TransactionPayload) => {
    this.props.addTransaction(payload);
    this.closeForm();
  };

  addCredit = () => {
    this.setState({
      formActive: true,
      formType: 'credit',
    });
  };

  addDebit = () => {
    this.setState({
      formActive: true,
      formType: 'debit',
    });
  };

  closeForm = () => {
    this.setState({
      formActive: false,
    });
  };

  toogleSortOrder = () => {
    if (this.props.sortOrder === 'DESC') {
      this.props.setSortOrder('ASC');
    } else {
      this.props.setSortOrder('DESC');
    }
  }

  tollbarAction() {
    if (!this.props.hasTransactions) {
      return {};
    }

    return this.props.sortOrder === 'ASC'
      ? {
        actions: ['file-upload'],
      }
      : {
        actions: ['file-download'],
      };
  }

  renderStatus() {
    return <Status currentStatus={this.props.currentStatus} />;
  }

  renderContent() {
    if (!this.props.hasTransactions) {
      return <FirstTransaction onAddCredit={this.addCredit} onAddDebit={this.addDebit} />;
    }

    return (
      <View style={styles.container}>
        <Timeline header={this.renderStatus()} transactions={this.props.transactions} />
        <Controls onAddCredit={this.addCredit} onAddDebit={this.addDebit} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar} />
        <Toolbar
          centerElement="Transações"
          rightElement={this.tollbarAction()}
          onRightElementPress={this.toogleSortOrder}
        />
        {this.renderContent()}
        <TransactionForm
          type={this.state.formType}
          active={this.state.formActive}
          onBack={this.closeForm}
          onSubmit={this.addTransaction}
        />
      </View>
    );
  }
}

const stateToProps = (state) => {
  const { transactions, sortOrder } = state.transactionsState;
  return {
    transactions: getSortedTransactions(transactions, sortOrder),
    hasTransactions: transactions.length > 0,
    currentStatus: getTransactionsStatus(transactions),
    sortOrder,
  };
};

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTransaction,
      setSortOrder,
    },
    dispatch,
  );

const SortedTransactions = connect(stateToProps, dispatchToProps)(Transactions);

export default SortedTransactions;
