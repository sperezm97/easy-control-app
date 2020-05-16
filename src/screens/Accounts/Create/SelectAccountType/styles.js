import { StyleSheet } from 'react-native';
import { layout, colors, globalStyles } from '../../../../styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: layout.spacingLg,
    marginVertical: layout.spacingLg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: layout.spacingMd,
  },
  item: {
    ...globalStyles.center,
    height: 90,
    width: 100,
    padding: layout.spacingXlg,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  containerText: {
    ...globalStyles.center,
    paddingVertical: layout.spacingMd,
  },
  image: {
    height: 45,
    width: 45,
    resizeMode: 'cover',
  },
  label: {
    fontFamily: 'Roboto-Regular',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    color: colors.primaryColor,
  },
  activeItem: {
    backgroundColor: colors.primaryColor,
  },

  activeTitle: {
    color: colors.white,
  },
});
