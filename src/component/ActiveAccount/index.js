import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Layout/Card';
import Icon from '../Layout/Icon';
import Text from '../Layout/Text';
import View from '../Layout/View';
import styles from './styles';
import { colors } from '../../styles';
import IncomeCard from './IncomeCard';
import ExpensesCard from './ExpensesCard';
import { getActiveAccount } from '../../store/accounts/selector';
import { formatPrice } from '../../utils';

const ActiveAccount = () => {
  const activeAccount = useSelector(getActiveAccount);
  const value = activeAccount?.totalAmount || '';
  return (
    <>
      <Card type="row">
        <View row>
          <View center>
            <Icon.Account />
          </View>
          <View style={styles.containerAccount}>
            <Text type="body">Actual Account</Text>
            <Text
              type="bodyBold"
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.actualAccountText}
            >
              {activeAccount?.name}
            </Text>
          </View>
        </View>
        <View>
          <Text type="body" style={styles.totalText} color={colors.grey}>
            Total
          </Text>
          <Text type="bodyBold" color={colors.primaryColor}>
            {formatPrice(value)}
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
