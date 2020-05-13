import React, { useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default Component => props => {
  const navigation = useNavigation();
  const { dangerouslyGetParent } = navigation;

  useFocusEffect(
    useCallback(() => {
      const parent = dangerouslyGetParent();
      if (parent) {
        parent.setOptions({
          tabBarVisible: false,
        });
      }
      return () => {
        if (parent) {
          parent.setOptions({ tabBarVisible: true });
        }
      };
    }, [dangerouslyGetParent]),
  );

  return <Component {...props} />;
};
