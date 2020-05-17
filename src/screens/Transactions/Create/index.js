import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, StackActions } from '@react-navigation/native';
import WithDismissBottomBar from '../../../hooks/WithDismissBottomBar';
import { Input, Header, View, Button } from '../../../component';
import { colors, layout } from '../../../styles';
import { isOnlyNumbers } from '../../../utils';
import InputCategory from './inputCategory';
import SelectTransactionType from './SelectTransactionType';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    margin: layout.spacingLg,
  },
});

const TransactionsCreate = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const valideEmptyFields = values =>
    values.description.trim().length &&
    values.transactionTypeId.length &&
    values.categoryId.length &&
    isOnlyNumbers(values.price);

  const createTransaction = values => {
    if (valideEmptyFields(values)) {
      dispatch({ type: 'transactions/create', values });
      navigation.dispatch(StackActions.pop());
    } else {
      Alert.alert('Oops', 'Complete all fields!');
    }
  };

  return (
    <View style={styles.main}>
      <Header titleName="Add Transactions" iconName="Close" />
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{
              description: '',
              transactionTypeId: 'ks25ee53mu6Ja4V6VKPl',
              categoryId: '',
              price: '',
            }}
            onSubmit={createTransaction}
          >
            {({ handleChange, handleSubmit, values }) => (
              <>
                <Input
                  label="Description"
                  placeholder="e.g. Hamburger"
                  value={values.description}
                  keyboardType="default"
                  onValueChange={handleChange('description')}
                />
                <SelectTransactionType
                  value={values.transactionTypeId}
                  onValueChange={handleChange('transactionTypeId')}
                />
                {/* <Picker
                  label="Transaction Type"
                  placeholder="Select a transaction type"
                  value={values.transactionTypeId}
                  onValueChange={handleChange('transactionTypeId')}
                  items={transactionType}
                /> */}
                <Input
                  label="Price"
                  placeholder="e.g. $5,000.00"
                  value={values.price}
                  keyboardType="numeric"
                  onValueChange={handleChange('price')}
                />
                <InputCategory
                  value={values.categoryId}
                  handleChange={handleChange('categoryId')}
                />
                <Button onPress={handleSubmit}>Save</Button>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default WithDismissBottomBar(TransactionsCreate);
