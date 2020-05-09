import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default {
  // Navigation Icons
  Right: () => <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />,
  Left: () => <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />,
  Down: () => <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />,
  Up: () => <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />,

  // Floating BUtton
  Add: () => <MaterialIcons name="add" size={24} color="black" />,
  Trash: () => <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" />,
  Close: () => <MaterialIcons name="close" size={24} color="black" />,
  Edit: () => <MaterialIcons name="edit" size={24} color="black" />,
  Save: () => <MaterialIcons name="save" size={24} color="black" />,

  // Account
  Account: () => <MaterialIcons name="account-balance-wallet" size={24} color="black" />,

  // Bottom Taps Icons
  TransactionList: props => <MaterialIcons {...props} name="list" />,
  AccountBank: props => <MaterialIcons {...props} name="account-balance" />,
  Reports: props => <MaterialCommunityIcons {...props} name="file-document" />,
  Profile: props => <MaterialIcons {...props} name="person" />,
};
