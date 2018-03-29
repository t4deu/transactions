// @flow
// external imports
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// types
import type { Transaction } from '../../../state/Ducks/Transactions/Types';
// containers & components
import { toCurrency, humanDate } from '../../../Utils';
// styles
import styles from './ListItem.styles';

type Props = {
  transaction: Transaction,
  last: boolean,
};

export default class ListItem extends PureComponent<Props> {
  renderTime(transaction:Transaction) {
    return (
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>{transaction.createdAt}</Text>
      </View>
    );
  }

  renderDetails(transaction:Transaction) {
    const detailStyle = this.props.last ? styles.lastDetail : styles.defaultDetail;

    return (
      <View style={[styles.details, detailStyle]}>
        <View style={styles.detail}>{this.renderDescription(transaction)}</View>
        { !this.props.last && <View style={styles.separator} /> }
      </View>
    );
  }

  renderDescription(transaction:Transaction) {
    return (
      <View>
        {this.renderHeader(transaction)}
        <Text style={styles.description}>{transaction.description}</Text>
        <Text style={styles.price}>{toCurrency(transaction.amount)}</Text>
      </View>
    );
  }

  renderHeader(transaction:Transaction) {
    const title = transaction.type === 'credit' ? 'Crédito' : 'Débito';
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>{humanDate(transaction.createdAt)}</Text>
        </View>
      </View>
    );
  }

  renderCircle(transaction:Transaction) {
    return transaction.type === 'credit' ? (
      <View style={styles.circle}>
        <Ionicons name="ios-checkmark-circle" size={32} color="#9bd533" />
      </View>
    ) : (
      <View style={styles.circle}>
        <Ionicons name="ios-alert" size={32} color="#e6605e" />
      </View>
    );
  }

  render() {
    const { transaction } = this.props;

    return (
      <View style={styles.container}>
        {this.renderDetails(transaction)}
        {this.renderCircle(transaction)}
      </View>
    );
  }
}
