import React from 'react';
import Card from '../Layout/Card';
import Icon from '../Layout/Icon';
import Text from '../Layout/Text';
import View from '../Layout/View';
import styles from './styles';
import { colors } from '../../styles';

const ActiveAccount = () => {
  return (
    <Card type="body">
      <View row>
        <Icon.Account />
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
  );
};

export default ActiveAccount;
