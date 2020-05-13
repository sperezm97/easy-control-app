import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountsCreateScreen, AccountsListScreen } from '../screens';

const AccountsStack = createStackNavigator();

const defaultOptions = {
  headerShown: false,
};

const config = {
  animation: 'timing',
  config: {
    duration: 300,
  },
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
        gestureDirection: 'vertical',
      }}
    />
  </AccountsStack.Navigator>
);
export default AccountsNavigator;
