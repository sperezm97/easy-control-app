import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
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

const FloatingButton = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon.Add />
      </View>
    </TouchableOpacity>
  );
};

FloatingButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FloatingButton;
