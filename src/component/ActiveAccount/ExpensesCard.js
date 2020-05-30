import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Layout/Card';
import Text from '../Layout/Text';
import { colors } from '../../styles';
import { getActiveAccount } from '../../store/accounts/selector';
import { formatPrice } from '../../utils';

const ExpensesCard = () => {
  const activeAccount = useSelector(getActiveAccount);
  const value = activeAccount?.totalExpenses || '';
  return (
    <Card type="body">
      <Text type="body" color={colors.grey}>
        Total Expenses
      </Text>
      <Text type="bodyBold" color={colors.danger}>
        {formatPrice(value)}
      </Text>
    </Card>
  );
};

export default ExpensesCard;
