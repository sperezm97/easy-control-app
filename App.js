/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import './src/config/firebase';
import './src/config/sentry';
import { useFonts } from '@use-expo/font';
import { SafeAreaView, StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src';
import { colors, layout } from './src/styles';
import store from './src/store';

const style = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
};
console.ignoredYellowBox = ['Setting a timer'];

export default function App() {
  const [slashLoaded, setSlashLoaded] = useState(false);
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

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      await SplashScreen.hideAsync();
      setSlashLoaded(true);
    })();
  }, []);

  if (!fontsLoaded && !slashLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={layout.isiOS ? 'dark-content' : 'default'} />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}
