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
    <MaterialIcons {...props} name="keyboard-arrow-right" size={24} color={colors.black} />
  ),
  Left: props => (
    <MaterialIcons {...props} name="keyboard-arrow-left" size={24} color={colors.black} />
  ),
  Down: props => (
    <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color={colors.black} />
  ),
  Up: props => <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color={colors.black} />,

  // Floating BUtton
  Add: props => <MaterialIcons {...props} name="add" size={36} color={colors.white} />,
  Trash: props => (
    <MaterialCommunityIcons {...props} name="trash-can-outline" size={24} color={colors.black} />
  ),
  Close: props => <MaterialIcons {...props} name="close" size={24} color={colors.black} />,
  Edit: props => <MaterialIcons {...props} name="edit" size={24} color={colors.black} />,
  Save: props => <MaterialIcons {...props} name="save" size={24} color={colors.black} />,

  // Account
  Account: props => (
    <MaterialIcons {...props} name="account-balance-wallet" size={36} color={colors.black} />
  ),

  FontAwesome: props => <FontAwesome5 {...props} />,

  // Bottom Taps Icons
  TransactionList: props => <MaterialIcons {...props} name="view-list" size={36} />,
  AccountBank: props => <MaterialIcons {...props} name="account-balance" size={36} />,
  Reports: props => <MaterialCommunityIcons {...props} name="file-document" size={36} />,
  Profile: props => <MaterialIcons {...props} name="person" size={36} />,
};
