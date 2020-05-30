import { StyleSheet } from 'react-native';
import { layout, colors, globalStyles } from '../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    marginBottom: layout.spacingMd,
  },
  button: {
    ...globalStyles.center,
    borderRadius: 10,
    backgroundColor: colors.primaryColor,
    height: 50,
    width: 70,
  },
  buttonDisable: {
    backgroundColor: colors.grey,
  },
  deleteButton: {
    backgroundColor: colors.danger,
  },
});
