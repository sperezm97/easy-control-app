/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles, colors, layout } from '../../styles';

const styles = StyleSheet.create({
  row: {
    ...globalStyles.row,
    marginBottom: layout.spacingXlg,
    paddingVertical: layout.spacingLg,
    paddingHorizontal: layout.spacingLg,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: layout.spacingXlg,
    paddingTop: layout.spacingXlg,
  },
  body: {
    flex: 1,
    ...globalStyles.center,
    borderRadius: 10,
    padding: layout.spacingXXl,
    backgroundColor: colors.white,
    marginHorizontal: layout.spacingMd,
  },
});
const Card = props => {
  const { type, children } = props;
  const cardType = styles[type];
  return <View style={cardType}>{children}</View>;
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Card;
