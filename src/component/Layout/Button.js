import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { layout, colors, globalStyles } from '../../styles';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.center,
    marginVertical: layout.spacingMd,
    marginHorizontal: layout.spacingMd,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    padding: layout.spacingXlg,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
  },
});

const Button = props => {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text type="button" color={colors.white} style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Button;
