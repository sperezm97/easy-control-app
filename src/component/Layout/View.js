/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { View as RNView } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles, colors } from '../../styles';

const View = props => {
  const { children, row, column, style, center, between, flex, debug } = props;
  return (
    <RNView
      style={[
        flex && globalStyles.flex,
        row && globalStyles.row,
        column && globalStyles.column,
        center && globalStyles.center,
        between && globalStyles.between,
        debug && { borderWidth: 2, borderColor: colors.danger },
        style,
      ]}
    >
      {children}
    </RNView>
  );
};

View.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  row: PropTypes.bool,
  center: PropTypes.bool,
  column: PropTypes.bool,
  between: PropTypes.bool,
  flex: PropTypes.bool,
  debug: PropTypes.bool,
};

export default View;
