import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Layout/Icon';
import View from '../Layout/View';
import { colors } from '../../styles';
import styles from './styles';

const ActionBar = props => {
  const { isBulkActive, onActiveBulk, onDelete, navigateToCreate } = props;

  const onAlert = () => {
    Alert.alert('This feature is coming in next releases');
  };

  const onAlertDelete = () => {
    Alert.alert('Do you really want delete these transactions?', '', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => onDelete(),
      },
    ]);
  };

  return (
    <View row style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onActiveBulk}>
        <Icon.FontAwesome
          name={isBulkActive ? 'check-square' : 'square'}
          size={30}
          color={colors.white}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disable={isBulkActive}
        onPress={onAlertDelete}
        style={[styles.button, isBulkActive ? styles.deleteButton : styles.buttonDisable]}
      >
        <Icon.Trash size={30} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onAlert}>
        <Icon.Filter size={30} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToCreate}>
        <Icon.Add size={30} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

ActionBar.propTypes = {
  isBulkActive: PropTypes.bool.isRequired,
  onActiveBulk: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  navigateToCreate: PropTypes.func.isRequired,
};

export default ActionBar;
