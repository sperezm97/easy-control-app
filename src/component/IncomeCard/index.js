import React from 'react';
import Card from '../Layout/Card';
import Text from '../Layout/Text';
import { colors } from '../../styles';

const IncomeCard = () => {
  return (
    <Card type="left">
      <Text type="body" color={colors.grey}>
        Total Income
      </Text>
      <Text type="bodyBold" color={colors.success}>
        $40,000.00
      </Text>
    </Card>
  );
};

export default IncomeCard;
