import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/native';
import WithDismissBottomBar from '../../../hooks/WithDismissBottomBar';
import { Input, Header, View, Button } from '../../../component';
import { colors, layout } from '../../../styles';
import { isOnlyNumbers } from '../../../utils';
import SelectAccountType from './SelectAccountType';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    margin: layout.spacingLg,
  },
});

const AccountsCreate = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const valideEmptyFields = values =>
    values.name.trim().length && values.typeAccountId && isOnlyNumbers(values.totalAmount);

  const createTransaction = values => {
    if (valideEmptyFields(values)) {
      dispatch({ type: 'accounts/create', values });
      navigation.dispatch(StackActions.pop());
    } else {
      Alert.alert('Oops', 'Complete all fields!');
    }
  };

  return (
    <View style={styles.main}>
      <Header titleName="Add Account" />
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{
              name: '',
              typeAccountId: 'g4DNSM58PaRA5VR178hy',
              totalAmount: '',
            }}
            onSubmit={createTransaction}
          >
            {({ handleChange, handleSubmit, values }) => (
              <>
                <Input
                  label="Name"
                  placeholder="e.g Food"
                  value={values.name}
                  keyboardType="default"
                  onValueChange={handleChange('name')}
                />
                <SelectAccountType
                  value={values.typeAccountId}
                  onValueChange={handleChange('typeAccountId')}
                />
                {/* <Picker
                  label="Account Type"
                  placeholder="Select an account type"
                  value={values.typeAccountId}
                  onValueChange={handleChange('typeAccountId')}
                  items={accountype}
                /> */}
                <Input
                  label="Total Amount"
                  placeholder="Type an initial budget"
                  value={values.totalAmount}
                  keyboardType="number-pad"
                  onValueChange={handleChange('totalAmount')}
                />
                <View>
                  <Button onPress={handleSubmit}>Save</Button>
                </View>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default WithDismissBottomBar(AccountsCreate);
