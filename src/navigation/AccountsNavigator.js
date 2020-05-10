import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountsCreateScreen, AccountsListScreen } from '../screens';

const AccountsStack = createStackNavigator();

const defaultOptions = {
  headerShown: false,
};

const config = {
  animation: 'timing',
};

const AccountsNavigator = () => (
  <AccountsStack.Navigator
    headerMode="none"
    mode="modal"
    initialRouteName="Accounts"
    screenOptions={defaultOptions}
    keyboardHandlingEnabled
  >
    <AccountsStack.Screen name="AccountsList" component={AccountsListScreen} />
    <AccountsStack.Screen
      name="AccountsCreate"
      component={AccountsCreateScreen}
      options={{
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    />
  </AccountsStack.Navigator>
);
export default AccountsNavigator;
