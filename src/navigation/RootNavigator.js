import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountsNavigator from './AccountsNavigator';
import ProfileNavigator from './ProfileNavigator';
import ReportsNavigator from './ReportsNavigator';
import TransactionsNavigator from './TransactionNavigator';
import { Icon } from '../component';
import { colors, fonts } from '../styles';
import layout from '../styles/layout';

const Tab = createBottomTabNavigator();

const defaultOption = {
  activeTintColor: colors.primaryColor,
  activeBackgroundColor: 'transparent',
  inactiveTintColor: colors.grey,
  inactiveBackgroundColor: 'transparent',
  showLabel: true,
  showIcon: true,
  adaptive: true,
  keyboardHidesTabBar: true,
  labelPosition: 'below-icon',
  labelStyle: {
    ...fonts.caption,
  },
  tabStyle: {},
  style: {
    ...layout.boxShadow,
    height: 60,
    // backgroundColor: colors.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
};

const RootNavigator = () => (
  <Tab.Navigator initialRouteName="Transactions" backBehavior="history" tabBarOptions={defaultOption}>
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
