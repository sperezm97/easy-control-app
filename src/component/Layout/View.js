import React from 'react';
import { View as RNView } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles } from '../../styles';

const View = props => {
  const { children, row, column, style, center, between } = props;
  return (
    <RNView
      style={[
        style,
        row && globalStyles.row,
        column && globalStyles.column,
        center && globalStyles.center,
        between && globalStyles.between,
      ]}
    >
      {children}
    </RNView>
  );
};

View.propTypes = {
  children: PropTypes.array.isRequired,
  style: PropTypes.object,
  row: PropTypes.bool,
  center: PropTypes.bool,
  column: PropTypes.bool,
  between: PropTypes.bool,
};

export default View;
