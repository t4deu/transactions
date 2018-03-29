// @flow
// external imports
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-material-ui';
// types
import type { Status as CurrentStatus } from '../../state/Ducks/Transactions/Types';
// containers & components
import { toCurrency } from '../../Utils';
// styles
import styles from './Status.styles';

type Props = {
  currentStatus: CurrentStatus,
};

const Status = (props: Props) => {
  const {
    total, creditTotal, debitTotal, isSaver,
  } = props.currentStatus;

  return (
    <View style={styles.painel}>
      <Card>
        <View style={styles.card}>
          <Text style={styles.text}>
            Você economizou <Text style={styles.currency}>{toCurrency(creditTotal)}</Text> e gastou{' '}
            <Text style={styles.currency}>{toCurrency(debitTotal)}</Text>. Atualmente você tem:
          </Text>
          <Text style={styles.total}>{toCurrency(total)}</Text>
          {isSaver && <Text style={styles.advice}>Parabéns! Você sabe usar deu dinheiro</Text>}
          {!isSaver && (
            <Text style={styles.advice}>Cuidado! Tá bom de começar a dar uma maneirada</Text>
          )}
        </View>
      </Card>
    </View>
  );
};

export default Status;
