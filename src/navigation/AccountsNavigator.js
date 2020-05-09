import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountsCreateScreen, AccountsListScreen } from '../screens';

const AccountsStack = createStackNavigator();

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

const AccountsNavigator = () => (
  <AccountsStack.Navigator
    headerMode="none"
    mode="card"
    initialRouteName="Accounts"
    screenOptions={defaultOptions}
    keyboardHandlingEnabled
  >
    <AccountsStack.Screen name="AccountsList" component={AccountsListScreen} />
    <AccountsStack.Screen name="AccountsCreate" component={AccountsCreateScreen} />
  </AccountsStack.Navigator>
);
export default AccountsNavigator;
