import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage } from 'react-native';
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
  activeBackgroundColor: colors.white,
  inactiveTintColor: colors.grey,
  inactiveBackgroundColor: colors.white,
  showLabel: true,
  showIcon: true,
  adaptive: true,
  keyboardHidesTabBar: true,
  labelPosition: 'below-icon',
  labelStyle: {
    ...fonts.caption,
  },
  tabStyle: {
    paddingTop: layout.spacingSm,
  },
  style: {
    ...layout.boxShadow,
  },
};

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [first, setFirst] = useState(false);
  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('user');
      setFirst(!!user);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <Tab.Navigator
      initialRouteName={first ? 'Transactions' : 'Accounts'}
      lazy
      backBehavior="history"
      tabBarOptions={defaultOption}
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
      {/* <Tab.Screen
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
  /> */}
    </Tab.Navigator>
  );
};

export default RootNavigator;
