// @flow
// external imports
import React, { Component } from 'react';
import { FlatList } from 'react-native';
// types
import type { Transactions, Transaction } from '../../state/Ducks/Transactions/Types';
// containers & components
import ListItem from './ListItem/ListItem';
// styles
import styles from './Timeline.styles';

type Props = {
  header: any,
  transactions: Transactions,
};

export default class Timeline extends Component<Props> {
  // BUG eslint-plugin-react/#1002
  // eslint-disable-next-line
  renderItem = ({ item, index }: {item: Transaction, index: number}) => (
    <ListItem transaction={item} last={index === this.props.transactions.length - 1} />
  );

  render() {
    return (
      <FlatList
        style={[styles.list]}
        data={this.props.transactions}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.props.header}
      />
    );
  }
}
