/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles, colors, layout } from '../../styles';

const styles = StyleSheet.create({
  body: {
    ...globalStyles.row,
    marginTop: layout.spacingXlg,
    marginBottom: layout.spacingXlg,
    paddingVertical: layout.spacingLg,
    paddingHorizontal: layout.spacingLg,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: layout.spacingXlg,
    padding: layout.spacingXXl,
    marginRight: layout.spacingMd,
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: layout.spacingXlg,
    paddingVertical: layout.spacingXXl,
    paddingLeft: layout.spacingXXl,
    marginLeft: layout.spacingMd,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: layout.spacingXlg,
    paddingTop: layout.spacingXlg,
  },
});
const Card = props => {
  const { type, children } = props;
  const cardType = styles[type];
  return <View style={cardType}>{children}</View>;
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Card;
