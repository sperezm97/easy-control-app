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
  },
  input: {
    ...fonts.caption,
    color: colors.textColor,
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

  return (
    <>
      <View row between>
        <Text type="bodyLight">Filter by account</Text>
        <View row style={styles.pickerContainer}>
          <RnPicker
            onValueChange={updateActualAccount}
            items={formatOptions()}
            placeholder={placeholder}
            value={activeAccount}
            Icon={() => <View />}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.input,
              viewContainer: {
                marginTop: Platform.select({
                  ios: 5,
                  android: -15,
                }),
              },
            }}
            useNativeAndroidPickerStyle
            doneText="Done"
          />
          {/* <Icon.Down /> */}
        </View>
      </View>
      <View style={styles.hr} />
    </>
  );
};

export default ListHeader;
