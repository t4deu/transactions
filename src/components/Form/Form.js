// @flow
// external imports
import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Toolbar, Button, Subheader } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';
import { withFormik } from 'formik';
import Yup from 'yup';
// types
import type { TransactionType } from '../../state/Ducks/Transactions/Types';
// containers & components
import { today, I18n } from '../../Utils';
// styles
import styles from './Form.styles';

type Props = {
  type: TransactionType,
  values: any,
  errors: any,
  touched: any,
  submitForm: Function,
  onBack: Function,
  setFieldValue: Function,
  active: boolean,
};

export class Form extends Component<Props> {
  onAmountChange = (amount: string) => {
    this.props.setFieldValue('amount', amount);
  };

  onDescriptionChange = (description: string) => {
    this.props.setFieldValue('description', description);
  };

  refreshState = () => {};

  goBack = () => {
    this.props.onBack();
  };

  render() {
    const {
      active, type, values, errors, touched, submitForm,
    } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle="fullScreen"
        visible={active}
        onRequestClose={this.goBack}
        onShow={this.refreshState}
      >
        <View style={styles.container}>
          <Toolbar
            centerElement={I18n(type)}
            leftElement="arrow-back"
            onLeftElementPress={this.goBack}
            rightElement={
              <Button text="Adicionar" onPress={submitForm} style={{ text: { color: 'white' } }} />
            }
          />
          <View style={styles.content}>
            <Subheader text={today()} />

            <View style={styles.form}>
              <TextField
                label="Valor"
                keyboardType="numeric"
                value={values.amount}
                onChangeText={this.onAmountChange}
                error={touched.amount && errors.amount}
              />

              <TextField
                title={type === 'credit' ? 'ex: Depósito Poupança' : 'ex: Cartão de crédito'}
                label="Descrição"
                maxLength={60}
                value={values.description}
                onChangeText={this.onDescriptionChange}
                error={touched.description && errors.description}
              />
            </View>
          </View>
          <Button onPress={submitForm} raised primary icon="done" text="Adicionar" />
        </View>
      </Modal>
    );
  }
}

const TransactionForm = withFormik({
  mapPropsToValues: () => ({ amount: '', description: '' }),
  handleSubmit: (values, { props, resetForm }) => {
    props.onSubmit({
      ...values,
      type: props.type,
    });
    resetForm();
  },
  validationSchema: Yup.object().shape({
    amount: Yup.number('Precisa ser um valor válido').required('Adicione o valor!'),
    description: Yup.string()
      .min(4, 'No mínimo 4 letras')
      .required('Adicione uma descrição!'),
  }),
})(Form);

export default TransactionForm;
