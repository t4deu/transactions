// @flow
// external imports
import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Toolbar, Button, Subheader } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';
// types
import type { TransactionType } from '../../state/Ducks/Transactions/Types';
// containers & components
import { today, I18n } from '../../Utils';
// styles
import styles from './Form.styles';

type Props = {
  type: TransactionType,
  onSubmit: Function,
  onBack: Function,
  active: boolean,
};

type State = {
  amount: string,
  description: string,
};

const initialState = {
  amount: '',
  description: '',
};

export default class Form extends Component<Props, State> {
  state = initialState;

  onAmountChange = (amount: string) => {
    this.setState({ amount });
  };

  onDescriptionChange = (description: string) => {
    this.setState({ description });
  };

  onSubmit = () => {
    const { amount, description } = this.state;

    this.props.onSubmit({
      type: this.props.type,
      amount: parseFloat(amount),
      description,
    });
  };

  refreshState = () => {
    this.setState(initialState);
  };

  goBack = () => {
    this.props.onBack();
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle="fullScreen"
        visible={this.props.active}
        onRequestClose={this.goBack}
        onShow={this.refreshState}
      >
        <View style={styles.container}>
          <Toolbar
            centerElement={I18n(this.props.type)}
            leftElement="arrow-back"
            onLeftElementPress={this.goBack}
            rightElement={<Button text="Adicionar" style={{ text: { color: 'white' } }} />}
          />
          <View style={styles.content}>
            <Subheader text={today()} />

            <View style={styles.form}>
              <TextField
                label="Valor"
                keyboardType="numeric"
                value={this.state.amount}
                onChangeText={this.onAmountChange}
              />

              <TextField
                label="Descrição"
                maxLength={60}
                value={`${this.state.description}`}
                onChangeText={this.onDescriptionChange}
              />
            </View>
          </View>
          <Button onPress={this.onSubmit} raised primary icon="done" text="Adicionar" />
        </View>
      </Modal>
    );
  }
}
