// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { Toolbar, Button, Subheader } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

import { today } from '../../Utils';

import styles from './Form.styles';

type Props = {
  title: string,
  onSubmit: Function,
  onBack: Function,
};

type State = {
  amount: string,
  description: string,
};

export default class Form extends Component<Props, State> {
  state = {
    amount: '',
    description: '',
  };

  handleAmountChange = (amount: string) => {
    this.setState({ amount });
  };

  handleSubmit = () => {
    const { amount, description } = this.state;

    this.props.onSubmit({
      amount: parseFloat(amount),
      description,
    });
  };

  goBack = () => {
    this.props.onBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          centerElement={this.props.title}
          leftElement="arrow-back"
          onLeftElementPress={this.goBack()}
          rightElement={<Button text="Adicionar" style={{ text: { color: 'white' } }} />}
        />
        <Subheader text={today()} />

        <View style={styles.form}>
          <TextField
            label="Valor"
            value={this.state.amount}
            onChangeText={this.handleAmountChange}
          />

          <TextField
            label="Descrição"
            value={`${this.state.description}`}
            onChangeText={amount => this.setState({ amount })}
          />
        </View>

        <Button raised primary icon="done" text="Adicionar" />
      </View>
    );
  }
}
