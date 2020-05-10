/* eslint-disable global-require */
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation';
import { colors } from './src/styles';
import './src/config/firebase';

const style = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lora-Bold': require('./assets/fonts/Lora-Bold.ttf'),
    'Lora-Italic': require('./assets/fonts/Lora-Italic.ttf'),
    'Lora-Regular': require('./assets/fonts/Lora-Regular.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={style.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}
