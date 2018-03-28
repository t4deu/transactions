// @flow
import React, { Component } from 'react';
import { ActionButton } from 'react-native-material-ui';

type Props = {
  onAddCredit: Function,
  onAddDebit: Function,
};

export default class Controls extends Component<Props> {
  onPress = (key: string) => {
    if (key === 'add') {
      this.props.onAddCredit();
    } else if (key === 'remove') {
      this.props.onAddDebit();
    }
  };

  render() {
    return (
      <ActionButton
        transition="toolbar"
        onPress={this.onPress}
        actions={[
          {
            icon: 'remove',
            label: 'Débito',
            name: 'remove',
          },
          {
            icon: 'add',
            label: 'Crédito',
            name: 'add',
          },
        ]}
      />
    );
  }
}
