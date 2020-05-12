import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RnPicker from 'react-native-picker-select';
import { View, Text, Icon } from '../../../component';
import { colors, layout, fonts } from '../../../styles';
import { getAllAccounts } from '../../../store/accounts/selector';
import { getActiveAccountId } from '../../../store/user/selectors';

const styles = StyleSheet.create({
  hr: {
    backgroundColor: colors.grey,
    marginVertical: layout.spacingSm,
    height: 1,
  },
  pickerContainer: {
    height: 20,
    paddingLeft: layout.spacingMd,
    marginVertical: layout.spacingNor,
  },
  input: {
    ...fonts.caption,
    color: colors.textColor,
  },
  iconContainer: {},
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

  const formatOptions = () =>
    accounts.map(i => ({
      label: i.name,
      value: i.id,
    }));

  const placeholder = {
    label: 'Select an active account',
    value: null,
    color: colors.grey,
  };
  const renderIcon = () => (
    <View style={styles.iconContainer}>
      <Icon.Down />
    </View>
  );

  return (
    <>
      <View row between>
        <View>
          <Text type="bodyLight">Filter by account</Text>
        </View>
        <View style={styles.pickerContainer}>
          <RnPicker
            onValueChange={updateActualAccount}
            items={formatOptions()}
            placeholder={placeholder}
            value={activeAccount}
            Icon={renderIcon}
            style={{
              inputAndroidContainer: {},
              inputIOSContainer: {},
              iconContainer: {},
              inputAndroid: styles.input,
              inputIOS: styles.input,
            }}
          />
          {/* <Icon.Down /> */}
        </View>
      </View>
      <View style={styles.hr} />
    </>
  );
};

export default ListHeader;
