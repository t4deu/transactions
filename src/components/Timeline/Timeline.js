// @flow
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import type { Children } from 'react';
import type { Transactions, Transaction } from '../../state/Ducks/Transactions/Types';

import ListItem from './ListItem/ListItem';

import styles from './Timeline.styles';

type Props = {
  header: Children,
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
