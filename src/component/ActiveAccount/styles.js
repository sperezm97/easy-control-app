import { StyleSheet } from 'react-native';
import { layout } from '../../styles';

export default StyleSheet.create({
  containerAccount: {
    marginLeft: layout.spacingNor,
  },
  containerCards: {
    justifyContent: 'space-evenly',
    marginBottom: layout.spacingXlg,
  },
  totalText: {
    textAlign: 'right',
  },
  actualAccountText: {
    width: 200,
  },
});
