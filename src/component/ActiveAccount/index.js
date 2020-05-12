import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Layout/Card';
import Icon from '../Layout/Icon';
import Text from '../Layout/Text';
import View from '../Layout/View';
import styles from './styles';
import { colors } from '../../styles';
import IncomeCard from '../IncomeCard';
import ExpensesCard from '../ExpensesCard';
import { getActiveAccount } from '../../store/accounts/selector';
import { formatMoneyValue } from '../../utils';

const ActiveAccount = () => {
  const activeAccount = useSelector(getActiveAccount);
  const value = activeAccount?.totalAmount || '';
  return (
    <>
      <Card type="body">
        <View row>
          <View center>
            <Icon.Account />
          </View>
          <View style={styles.containerAccount}>
            <Text type="body">Cuenta de Ahorro</Text>
            <Text type="bodyBold">{activeAccount.name}</Text>
          </View>
        </View>
        <View>
          <Text type="body" style={styles.totalText} color={colors.grey}>
            Total
          </Text>
          <Text type="bodyBold" color={colors.primaryColor}>
            {formatMoneyValue(value)}
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
