import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsCreateScreen, TransactionsListScreen } from '../screens';

const TransactionsStack = createStackNavigator();

const defaultOptions = {
  headerShown: false,
};

const config = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};

const TransactionsNavigator = () => (
  <TransactionsStack.Navigator
    headerMode="none"
    mode="modal"
    initialRouteName="Transactions"
    screenOptions={defaultOptions}
    keyboardHandlingEnabled
  >
    <TransactionsStack.Screen name="TransactionsList" component={TransactionsListScreen} />
    <TransactionsStack.Screen
      name="TransactionsCreate"
      component={TransactionsCreateScreen}
      options={{
        transitionSpec: {
          open: config,
          close: config,
        },
        gestureDirection: 'vertical',
      }}
    />
  </TransactionsStack.Navigator>
);

export default TransactionsNavigator;
