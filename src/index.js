import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';
import AppNavigator from './navigation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userId = await AsyncStorage.getItem('user');
      if (userId) {
        dispatch({ type: 'user/fetch', userId });
      } else {
        dispatch({ type: 'user/create' });
      }
    })();
  }, []);

  useEffect(() => {
    dispatch({ type: 'options/fetch' });
  }, []);

  return <AppNavigator />;
};

export default App;
