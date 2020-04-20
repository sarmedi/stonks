import { Dimensions } from 'react-native';
//sets some values for the default dimenions of screens
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
