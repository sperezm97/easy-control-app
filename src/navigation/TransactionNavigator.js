import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsCreateScreen, TransactionsListScreen } from '../screens';

const TransactionsStack = createStackNavigator();

const defaultOptions = {
  headerShown: false,
  headerTitleAlign: 'center',
  cardShadowEnabled: true,
  cardOverlayEnabled: true,
  safeAreaInsets: {
    top: 24,
    bottom: 24,
    right: 16,
    left: 15,
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
    <TransactionsStack.Screen name="TransactionsCreate" component={TransactionsCreateScreen} />
  </TransactionsStack.Navigator>
);

export default TransactionsNavigator;
