import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { Text, View, FileInvoice, HandHolding } from '../../../../component';
import styles from './styles';
import { colors } from '../../../../styles';

const index = props => {
  const onSelect = value => props.onValueChange(value);
  const isSelected = value => value == props.value;
  const savingAccountId = 'g4DNSM58PaRA5VR178hy';
  const checkingAccount = 'gKQeXPX5M3a590FF4NNn';
  return (
    <View style={styles.container}>
      <Text type="headLine" style={styles.label}>
        My account is...
      </Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.item, isSelected(savingAccountId) && styles.activeItem]}
          onPress={() => onSelect(savingAccountId)}
        >
          <View styles={styles.containerText}>
            <HandHolding
              width={45}
              height={45}
              fill={isSelected(savingAccountId) ? colors.white : colors.primaryColor}
            />
            <Text
              type="body"
              color={isSelected(savingAccountId) ? colors.white : colors.primaryColor}
              style={[styles.titles, isSelected(savingAccountId) && styles.activeTitle]}
            >
              Saving
            </Text>
          </View>
        </TouchableOpacity>
        <Text type="headline" style={styles.label}>
          Or
        </Text>
        <TouchableOpacity
          style={[styles.item, isSelected(checkingAccount) && styles.activeItem]}
          onPress={() => onSelect(checkingAccount)}
        >
          <View style={styles.containerText}>
            <FileInvoice
              width={45}
              height={45}
              fill={isSelected(checkingAccount) ? colors.white : colors.primaryColor}
            />
            <Text
              type="body"
              color={isSelected(checkingAccount) ? colors.white : colors.primaryColor}
              style={[styles.titles, isSelected(checkingAccount) && styles.activeTitle]}
            >
              Checking
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

index.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default index;
