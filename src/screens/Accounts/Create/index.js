import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import WithDismissBottomBar from '../../../hooks/WithDismissBottomBar';
import { Picker, Input, Header, View, Button } from '../../../component';
import { colors, layout } from '../../../styles';

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
  return (
    <View style={styles.main}>
      <Header titleName="Add Account" />
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            account_id: '',
            category_id: '',
            total_amount: '',
          }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <Input
                label="Name"
                placeholder="una coca cola"
                value={values.name}
                keyboardType="default"
                onValueChange={handleChange('name')}
              />
              <Picker
                label="Account Type"
                placeholder="Income"
                value={values.account_id}
                onValueChange={handleChange('account_id')}
                items={[
                  {
                    label: 'Ahorro',
                    value: 1,
                  },
                  {
                    label: 'Corriente',
                    value: 2,
                  },
                ]}
              />
              <Input
                label="Total Amount"
                placeholder="$50.00"
                value={values.total_amount}
                keyboardType="numeric"
                onValueChange={handleChange('total_amount')}
              />
              <View>
                <Button onPress={handleSubmit}>Save</Button>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default WithDismissBottomBar(AccountsCreate);
