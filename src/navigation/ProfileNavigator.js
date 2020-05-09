import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens';

const ProfileStack = createStackNavigator();

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

const ProfileNavigator = () => (
  <ProfileStack.Navigator
    headerMode="none"
    mode="card"
    initialRouteName="Profile"
    screenOptions={defaultOptions}
    keyboardHandlingEnabled
  >
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

export default ProfileNavigator;
