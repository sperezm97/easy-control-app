import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '../../../../component';
import { colors } from '../../../../styles';

const Selection = props => {
  const { isSelect, addToBulk, removeFromBulk } = props;

  if (isSelect) {
    return (
      <TouchableOpacity onPress={removeFromBulk}>
        <Icon.Check color={colors.white} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={addToBulk}>
      <Icon.UnCheck color={colors.white} />
    </TouchableOpacity>
  );
};

Selection.propTypes = {
  isSelect: PropTypes.bool.isRequired,
  removeFromBulk: PropTypes.func.isRequired,
  addToBulk: PropTypes.func.isRequired,
};

export default Selection;
