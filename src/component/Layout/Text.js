/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import { fonts, colors } from '../../styles';

const Text = props => {
  const { type, color, children, weight, style } = props;
  const fontStyle = fonts[type];

  return (
    <RNText
      style={[
        fontStyle,
        style,
        { color: color || colors.textColor },
        weight && { fontWeight: weight },
      ]}
    >
      {children}
    </RNText>
  );
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  weight: PropTypes.string,
  style: PropTypes.object,
};

export default Text;
