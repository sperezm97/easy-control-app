import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import AppNavigator from './src/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lora-Bold': import('./assets/fonts/Lora-Bold.ttf'),
    'Lora-Italic': import('./assets/fonts/Lora-Italic.ttf'),
    'Lora-Regular': import('./assets/fonts/Lora-Regular.ttf'),
    'Roboto-Black': import('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': import('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': import('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': import('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': import('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': import('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AppNavigator />;
}
