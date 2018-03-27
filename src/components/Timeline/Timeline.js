import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ListItem from './ListItem/ListItem';
import type { Transactions } from '../../state/transactions/types';

import styles from './Timeline.styles';

type Props = {
  transactions: Transactions,
};

export default class Timeline extends Component<Props> {
  renderItem = ({ item, index }) => (
    <ListItem transaction={item} last={index === this.props.transactions.length - 1} />
  );

  render() {
    return (
      <FlatList
        styles={styles.list}
        data={this.props.transactions}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        getItemLayout={this.itemLayout}
      />
    );
  }
}
