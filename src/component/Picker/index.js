import React from 'react';
import { StyleSheet } from 'react-native';
import RnPicker from 'react-native-picker-select';
import PropTypes from 'prop-types';
import { layout, fonts, colors } from '../../styles';
import Text from '../Layout/Text';
import View from '../Layout/View';

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

const Picker = props => {
  const { onValueChange, items, placeholder, value, Icon, label } = props;

  return (
    <View style={styles.container}>
      <Text type="headLine" style={styles.label}>
        {label}
      </Text>
      <View style={styles.containerInput}>
        <RnPicker
          onValueChange={onValueChange}
          items={items}
          placeholder={placeholder}
          value={value}
          style={styles.input}
        />
      </View>
    </View>
  );
};

Picker.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Picker;
