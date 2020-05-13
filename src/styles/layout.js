import { Dimensions, Platform } from 'react-native';
import colors from './colors';

export default {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,

  spacingSm: 4,
  spacingNor: 8,
  spacingMd: 12,
  spacingLg: 16,
  spacingXlg: 20,
  spacingXXl: 24,
  spacingXXXL: 28,

  boxShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },

  isAndroid: Platform.OS == 'android',
  isiOS: Platform.OS == 'ios',
};
