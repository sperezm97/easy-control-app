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

const TransactionsCreate = () => {
  return (
    <View style={styles.main}>
      <Header titleName="Add Transactions" />
      <View style={styles.container}>
        <Formik
          initialValues={{
            description: '',
            transaction_id: '',
            category_id: '',
            price: '',
          }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <Input
                label="Description"
                placeholder="una coca cola"
                value={values.description}
                keyboardType="default"
                onValueChange={handleChange('description')}
              />
              <Picker
                label="Transaction Type"
                placeholder="Income"
                value={values.transaction_id}
                onValueChange={handleChange('transaction_id')}
                items={[
                  {
                    label: 'Income',
                    value: 1,
                  },
                  {
                    label: 'Expenses',
                    value: 2,
                  },
                ]}
              />
              <Input
                label="Price"
                placeholder="$50.00"
                value={values.price}
                keyboardType="numeric"
                onValueChange={handleChange('price')}
              />
              <Picker
                label="Category"
                placeholder="Income"
                value={values.category_id}
                onValueChange={handleChange('category_id')}
                items={[
                  {
                    label: 'Vehicle',
                    value: 1,
                  },
                  {
                    label: 'Expenses',
                    value: 2,
                  },
                ]}
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

export default WithDismissBottomBar(TransactionsCreate);
