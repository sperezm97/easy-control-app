import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RnPicker from 'react-native-picker-select';
import { View, Text, Icon } from '../../../component';
import { colors, layout, fonts } from '../../../styles';
import { getAllAccounts } from '../../../store/accounts/selector';
import { getActiveAccountId } from '../../../store/user/selectors';

const styles = StyleSheet.create({
  hr: {
    borderColor: colors.grey,
    borderWidth: 0.5,
    marginVertical: layout.spacingSm,
    backgroundColor: colors.white,
  },
  pickerContainer: {
    height: 30,
    width: 100,
    marginTop: -15,
  },
  input: {
    ...fonts.caption,
    color: colors.textColor,
  },
  icon: {
    marginTop: 15,
  },
});

const ListHeader = () => {
  const activeAccount = useSelector(getActiveAccountId);
  const accounts = useSelector(getAllAccounts);
  const dispatch = useDispatch();

  const updateActualAccount = value => {
    if (value != activeAccount) {
      dispatch({ type: 'user/putActiveAccount', payload: value });
    }
  };

  const renderIcon = () => (
    <View style={styles.icon}>
      <Icon.Down />
    </View>
  );

  const formatOptions = () =>
    accounts.map(i => ({
      label: i.name,
      value: i.id,
    }));

  return (
    <>
      <View row between>
        <View>
          <Text type="bodyLight">Filter by account</Text>
        </View>
        <View style={styles.pickerContainer}>
          <RnPicker
            items={formatOptions()}
            value={activeAccount}
            Icon={renderIcon}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.input,
            }}
            onValueChange={updateActualAccount}
            placeholder={{
              label: 'Select an active account',
              color: colors.grey,
              value: null,
            }}
          />
        </View>
      </View>
      <View style={styles.hr} />
    </>
  );
};

export default ListHeader;
