// @flow
// external imports
import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-material-ui';
// styles
import styles from './FirstTransaction.styles';

type Props = {
  onAddCredit: Function,
};

const FirstTransaction = (props: Props) => (
  <View style={styles.painel}>
    <Card>
      <View style={styles.card}>
        <Text style={styles.welcome}>Seja Bem Vindo!</Text>
        <Text style={styles.text}>
            Toque neste botão aqui para adicionar nossa primeira transação
        </Text>
        <Button onPress={props.onAddCredit} raised primary icon="add" text="Adicionar Renda" />
      </View>
    </Card>
  </View>
);

export default FirstTransaction;
