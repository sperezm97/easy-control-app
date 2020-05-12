import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Layout/Card';
import Text from '../Layout/Text';
import { colors } from '../../styles';
import { getActiveAccount } from '../../store/accounts/selector';
import { formatMoneyValue } from '../../utils';

const ExpensesCard = () => {
  const activeAccount = useSelector(getActiveAccount);
  return (
    <Card type="right">
      <Text type="body" color={colors.grey}>
        Total Expenses
      </Text>
      <Text type="bodyBold" color={colors.danger}>
        {formatMoneyValue(activeAccount?.totalExpenses)}
      </Text>
    </Card>
  );
};

export default ExpensesCard;
