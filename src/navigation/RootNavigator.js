import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountsNavigator from './AccountsNavigator';
import ProfileNavigator from './ProfileNavigator';
import ReportsNavigator from './ReportsNavigator';
import TransactionsNavigator from './TransactionNavigator';
import { Icon } from '../component/Layout';
import { colors, fonts } from '../styles';

const Tab = createBottomTabNavigator();

const defaultOption = {
  activeTintColor: colors.primaryColor,
  activeBackgroundColor: colors.white,
  inactiveTintColor: colors.grey,
  inactiveBackgroundColor: colors.white,
  showLabel: true,
  showIcon: true,
  adaptive: true,
  keyboardHidesTabBar: true,
  labelPosition: 'beside-icon',
  labelStyle: {
    ...fonts.caption,
  },
  tabStyle: {},
  style: {},
};

const defaultTapOptions = {
  tabBarVisible: true,
};

const RootNavigator = () => (
  <Tab.Navigator
    screenOptions={defaultOption}
    initialRouteName="Transactions"
    backBehavior="history"
    tabBarOptions={defaultTapOptions}
  >
    <Tab.Screen
      name="Transactions"
      component={TransactionsNavigator}
      options={{
        tabBarLabel: 'Transactions',
        tabBarIcon: props => <Icon.TransactionList {...props} />,
      }}
    />
    <Tab.Screen
      name="Accounts"
      component={AccountsNavigator}
      options={{
        tabBarLabel: 'Accounts',
        tabBarIcon: props => <Icon.AccountBank {...props} />,
      }}
    />
    <Tab.Screen
      name="Reports"
      component={ReportsNavigator}
      options={{
        tabBarLabel: 'Reports',
        tabBarIcon: props => <Icon.Reports {...props} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: props => <Icon.Profile {...props} />,
      }}
    />
  </Tab.Navigator>
);

export default RootNavigator;
