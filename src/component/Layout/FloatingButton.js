import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles, colors } from '../../styles';
import Icon from './Icon';
import View from './View';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.center,
    backgroundColor: colors.primaryColor,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

const FloatingButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon.Add />
      </View>
    </TouchableOpacity>
  );
};

export default FloatingButton;
