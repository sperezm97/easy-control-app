import { Dimensions } from 'react-native';
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
    shadowColor: colors.darkGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
};
