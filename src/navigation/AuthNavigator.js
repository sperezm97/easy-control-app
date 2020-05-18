import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { CategoriesScreen } from '../screens';

const AuthStack = createStackNavigator();

const defaultOptions = {
  headerShown: false,
};

const AuthNavigator = () => (
  <AuthStack.Navigator
    headerMode="none"
    mode="modal"
    initialRouteName="Auth"
    screenOptions={defaultOptions}
    keyboardHandlingEnabled
  >
    <AuthStack.Screen name="Main" component={TabNavigator} />
    <AuthStack.Screen name="Categories" component={CategoriesScreen} />
  </AuthStack.Navigator>
);
export default AuthNavigator;
