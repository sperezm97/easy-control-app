import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Layout/Card';
import Text from '../Layout/Text';
import { colors } from '../../styles';
import { getActiveAccount } from '../../store/accounts/selector';
import { formatMoneyValue } from '../../utils';

const IncomeCard = () => {
  const activeAccount = useSelector(getActiveAccount);
  return (
    <Card type="left">
      <Text type="body" color={colors.grey}>
        Total Income
      </Text>
      <Text type="bodyBold" color={colors.success}>
        {formatMoneyValue(activeAccount.totalIncome)}
      </Text>
    </Card>
  );
};

export default IncomeCard;
