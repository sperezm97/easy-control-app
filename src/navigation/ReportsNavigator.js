import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReportsScreen } from '../screens';

const ReportsStack = createStackNavigator();

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

const ReportsNavigator = () => (
  <ReportsStack.Navigator
    headerMode="none"
    mode="card"
    initialRouteName="Reports"
    screenOptions={defaultOptions}
    keyboardHandlingEnabled
  >
    <ReportsStack.Screen name="Reports" component={ReportsScreen} />
  </ReportsStack.Navigator>
);

export default ReportsNavigator;
