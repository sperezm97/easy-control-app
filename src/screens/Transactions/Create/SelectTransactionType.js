import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { View, Text } from '../../../component';
import { layout, colors, globalStyles } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    padding: layout.spacingNor,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primaryColor,
    marginTop: layout.spacingNor,
  },
  item: {
    ...globalStyles.center,
    height: 50,
    backgroundColor: colors.white,
    minWidth: 164,
  },
  activeItem: {
    backgroundColor: colors.primaryColor,
  },
  label: {
    fontFamily: 'Roboto-Regular',
  },
  left: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const SelectTransactionType = props => {
  const { value, onValueChange } = props;
  const onSelect = v => onValueChange(v);
  const isSelected = v => v == value;

  const expensesId = 'ks25ee53mu6Ja4V6VKPl';
  const incomeId = 'rXhNf8qWxQooVeaZJ1Tb';

  return (
    <View style={styles.container}>
      <Text type="headLine" style={styles.label}>
        This transaction is an...
      </Text>
      <View style={styles.containerRow}>
        <TouchableOpacity onPress={() => onSelect(expensesId)}>
          <View style={[styles.item, styles.left, isSelected(expensesId) && styles.activeItem]}>
            <Text
              type="bodyBold"
              color={isSelected(expensesId) ? colors.white : colors.primaryColor}
            >
              Expenses
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelect(incomeId)}>
          <View style={[styles.item, styles.right, isSelected(incomeId) && styles.activeItem]}>
            <Text type="bodyBold" color={isSelected(incomeId) ? colors.white : colors.primaryColor}>
              Income
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SelectTransactionType.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default SelectTransactionType;
