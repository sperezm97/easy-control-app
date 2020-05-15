import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { colors, layout, fonts } from '../../styles';
import View from '../Layout/View';
import Text from '../Layout/Text';

const styles = StyleSheet.create({
  container: {
    padding: layout.spacingNor,
  },
  containerInput: {
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    marginVertical: layout.spacingNor,
    borderRadius: 10,
    paddingLeft: layout.spacingMd,
  },
  label: {
    fontFamily: 'Roboto-Regular',
  },
  input: {
    ...fonts.body,
  },
});

const Input = props => {
  const { label, placeholder, value, onValueChange, ...rest } = props;
  return (
    <View style={styles.container}>
      <Text type="headLine" style={styles.label}>
        {label}
      </Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          value={value}
          onChangeText={onValueChange}
          style={styles.input}
          {...rest}
        />
      </View>
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  keyboardType: PropTypes.string.isRequired,
};

export default Input;
