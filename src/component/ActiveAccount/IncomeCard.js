import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Layout/Card';
import Text from '../Layout/Text';
import { colors } from '../../styles';
import { getActiveAccount } from '../../store/accounts/selector';
import { formatPrice } from '../../utils';

const IncomeCard = () => {
  const activeAccount = useSelector(getActiveAccount);
  const value = activeAccount?.totalIncome || '';
  return (
    <Card type="body">
      <Text type="body" color={colors.grey}>
        Total Income
      </Text>
      <Text type="bodyBold" color={colors.success}>
        {formatPrice(value)}
      </Text>
    </Card>
  );
};

export default IncomeCard;
