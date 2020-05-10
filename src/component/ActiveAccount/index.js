import React from 'react';
import Card from '../Layout/Card';
import Icon from '../Layout/Icon';
import Text from '../Layout/Text';
import View from '../Layout/View';
import styles from './styles';
import { colors } from '../../styles';
import IncomeCard from '../IncomeCard';
import ExpensesCard from '../ExpensesCard';

const ActiveAccount = () => {
  return (
    <>
      <Card type="body">
        <View row>
          <View center>
            <Icon.Account />
          </View>
          <View style={styles.containerAccount}>
            <Text type="body">Cuenta de Ahorro</Text>
            <Text type="bodyBold">Uso corriente</Text>
          </View>
        </View>
        <View>
          <Text type="body" style={styles.totalText} color={colors.grey}>
            Total
          </Text>
          <Text type="bodyBold" color={colors.primaryColor}>
            $80,000.00
          </Text>
        </View>
      </Card>
      <View row between style={styles.containerCards}>
        <IncomeCard />
        <ExpensesCard />
      </View>
    </>
  );
};

export default ActiveAccount;
