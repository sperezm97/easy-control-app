import React from 'react';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';
import { colors } from '../../styles';

export default {
  // Navigation Icons
  Right: props => <FontAwesome name="chevron-right" size={24} color={colors.black} {...props} />,
  Left: props => <FontAwesome name="chevron-left" size={24} color={colors.black} {...props} />,
  Down: props => <FontAwesome name="chevron-down" size={24} color={colors.black} {...props} />,
  Up: props => <FontAwesome name="chevron-up" size={24} color={colors.black} {...props} />,

  // Floating BUtton
  Add: props => <FontAwesome name="plus" size={36} color={colors.white} {...props} />,
  Trash: props => <FontAwesome name="trash" size={24} color={colors.black} {...props} />,
  Close: props => <FontAwesome5 name="times" size={24} color={colors.black} {...props} />,
  Edit: props => <FontAwesome name="edit" size={24} color={colors.black} {...props} />,
  Save: props => <FontAwesome name="save" size={24} color={colors.black} {...props} />,
  Filter: props => <FontAwesome5 name="filter" size={24} color={colors.black} {...props} />,

  CircleClose: props => (
    <FontAwesome name="times-circle" size={48} color={colors.white} {...props} />
  ),

  UnCheck: props => <FontAwesome5 name="circle" size={24} color={colors.black} {...props} />,
  Check: props => <FontAwesome name="check-circle" size={24} color={colors.black} {...props} />,

  UnCheckSquare: props => <FontAwesome5 name="square" size={24} color={colors.black} {...props} />,
  CheckSquare: props => (
    <FontAwesome5 name="check-square" size={24} color={colors.black} {...props} />
  ),

  FontAwesome: props => <FontAwesome size={24} color={colors.black} {...props} />,
  FontAwesome5: props => <FontAwesome size={24} color={colors.black} {...props} />,

  // Account
  Account: props => (
    <FontAwesome5 {...props} name="money-check-alt" size={36} color={colors.secondaryColor} />
  ),

  // Bottom Taps Icons
  TransactionList: props => <MaterialIcons name="view-list" size={36} {...props} />,
  AccountBank: props => <MaterialIcons name="account-balance" size={36} {...props} />,
  Reports: props => <MaterialCommunityIcons name="file-document" size={36} {...props} />,
  Profile: props => <MaterialIcons name="person" size={36} {...props} />,
};
