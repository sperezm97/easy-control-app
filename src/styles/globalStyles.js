import { StyleSheet } from 'react-native';
import layout from './layout';
import colors from './colors';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
  },
  container: {
    marginHorizontal: layout.spacingXlg,
    marginVertical: layout.spacingXXl,
  },
  debug: {
    borderWidth: 2,
    borderColor: colors.danger,
  },
});
