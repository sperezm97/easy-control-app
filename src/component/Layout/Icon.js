import React from 'react';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons';
import { colors } from '../../styles';

export default {
  // Navigation Icons
  Right: props => (
    <MaterialIcons name="keyboard-arrow-right" size={24} color={colors.black} {...props} />
  ),
  Left: props => (
    <MaterialIcons name="keyboard-arrow-left" size={24} color={colors.black} {...props} />
  ),
  Down: props => (
    <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.black} {...props} />
  ),
  Up: props => <MaterialIcons name="keyboard-arrow-up" size={24} color={colors.black} {...props} />,

  // Floating BUtton
  Add: props => <MaterialIcons name="add" size={36} color={colors.white} {...props} />,
  Trash: props => (
    <MaterialCommunityIcons name="trash-can-outline" size={24} color={colors.black} {...props} />
  ),
  Close: props => <MaterialIcons name="close" size={24} color={colors.black} {...props} />,
  Edit: props => <MaterialIcons name="edit" size={24} color={colors.black} {...props} />,
  Save: props => <MaterialIcons name="save" size={24} color={colors.black} {...props} />,

  UnCheck: props => (
    <MaterialCommunityIcons
      name="checkbox-blank-circle-outline"
      size={24}
      color={colors.black}
      {...props}
    />
  ),
  Check: props => (
    <MaterialCommunityIcons
      name="checkbox-marked-circle"
      size={24}
      color={colors.black}
      {...props}
    />
  ),

  // Account
  Account: props => (
    <MaterialIcons {...props} name="account-balance-wallet" size={36} color={colors.black} />
  ),

  FontAwesome: props => <FontAwesome5 {...props} />,

  // Bottom Taps Icons
  TransactionList: props => <MaterialIcons name="view-list" size={36} {...props} />,
  AccountBank: props => <MaterialIcons name="account-balance" size={36} {...props} />,
  Reports: props => <MaterialCommunityIcons name="file-document" size={36} {...props} />,
  Profile: props => <MaterialIcons name="person" size={36} {...props} />,
};
