import React from 'react';
import Card from '../Layout/Card';
import Text from '../Layout/Text';
import { colors } from '../../styles';

const ExpensesCard = () => {
  return (
    <Card type="right">
      <Text type="body" color={colors.grey}>
        Total Expenses
      </Text>
      <Text type="bodyBold" color={colors.danger}>
        $20,000.00
      </Text>
    </Card>
  );
};

export default ExpensesCard;
