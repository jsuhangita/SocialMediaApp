import { Platform } from 'react-native';
import { RFValue } from '../utils/helper.util';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 70;

const theme = {
  // Color Variables
  WHITE: '#FFFFFF',
  WHITE_GREY: '#fafafa',
  white: '#FFFFFF',
  black: '#000000',
  BLACK: '#000000',
  LIGHT_BLACK: '#000000',
  SEMI_LIGHT_BLACK: '#000000',
  YELLOW: '#fdbb11',
  ORANGE: '#fb5d01',
  BLUE: '#5497F1',
  RED: '#d43020',
  GREY: '#838383',
  LIGHT_GREY: '#d8d8d8',
  DARK_GREY: '#909090',
  grey: '#ccc',
  red: '#f04848',
  paleRed: '#f76b8a',
  rouge: '#c25b5a',
  buttonDisabledBg: '#FF8E8E',
  lightGrey: 'rgba(43, 43, 43, 0.6)',
  FADE_BLACK: 'rgba(0, 0, 0, 0.7)',
  lightGreyTwo: '#e0e0e0',
  GREEN: '#22662B',
  LIGHT_GREEN: '#50A502',
  barBG: '#424242',
  barButton: '#4DD0E1',
  greyStarColor: '#d8d8d8',
  starColor: '#00a6b8',

  // Named Color Variables
  PRIMARY: '#BEAF87',
  PRIMARY_DARK:'#222831',
  PRIMARY_LIGHT: '#eaf6f6',
  LIGHT: '#eaf6f6',
  TEXT_PRIMARY: '#444444',
  TEXT_SECONDARY: '#999999',
  TEXT_RED: '#FF7777',
  TEXT_WHITE: '#FFFFFF',
  TEXT_PLACEHOLDER: '#AAAAAA',
  TEXT_DANGER: '#FF7777',
  FADE_BORDER: '#D8D8D880',

  toggleBackground: '#e1e1e1',
  fadeBlack: 'rgba(0, 0, 0, 0.5)',
  fadeWhite: 'rgba(255, 255, 255, .7)',
  FADE_WHITE: 'rgba(255, 255, 255, .7)',
  cargBg: '#FA4560',
  contrast: '#ffffff',
  whiteGrey: '#f9f9f9',
  light: '#d8ecf2',
  buttonTextColor: '#ffffff',
  disabledGrey: '#cac6c6',
  DISABLED_GREY: '#cac6c6',
  FADE_GREY: '#F2F2F2',
  containerGrey: 'rgba(0,0,0, 0.09)',
  borderGrey: '#979797',
  cardGrey: 'rgba(201, 198, 198, 0.2)',
  cardVerticalSpacing: 10,
  overlayBackground: 'rgba(0, 0, 0, 0.70)',
  OVERLAY_BACKGROUND: 'rgba(0, 0, 0, 0.70)',
  primaryUnHighlighted: '#FF8E8E',
  text: '#000',
  header: '#ED1D25',
  textLightGrey: '#666',
  background: '#FFF',
  buttonBg: '#ED1D25',
  errorColor: '#F00',
  primary: '#33bddf',
  secondary: '#00a6b8',
  tertiary: '#00a6b8',
  brand: '#33bddf',
  budgetText: '#00a6b8',
  endPointDot: '#00a6b8',
  inputBackground: '#fafbfb',
  buttonPickerColor: '#007AFF',
  textGrey: '#9E9E9E',
  TRANSPARENT: 'transparent',
  PHOTO_BACKGROUND: '#e1e4e8',
  transparent: 'transparent',
  dotColor: '#dadada',
  lightBorder: '#d2d2d2',
  activeDotColor: '#646464',
  lineSeparatorColor: '#e3e9ec',
  landingText: '#383838',
  engagementBackground: 'rgba(216, 236, 242, 0.8)',
  timelineBorder: '#979797',
  textInputBorder: '#979797',
  imageOverlay: 'rgba(0, 0, 0, 0.2)',
  tabBarTopColor: 'rgba(0, 0, 0, .2)',
  tabBarBackgroundColor: '#f4f4f4',
  darkWhite: '#f4f4f4',
  iconCameraBackground: '#d8d8d8',
  bannerSearchPlaceholder: 'rgba(216, 236, 242, 0.7)',

  IMAGE_BACKGROUND: '#EEEEEE',
  BORDER_WHITE: '#EEEEEE',

  // fonSizes
  fontSizeXS: Platform.OS === 'ios' ? 11 : 11,
  FONT_SIZE_XS: Platform.OS === 'ios' ? RFValue(8) : RFValue(8),
  fontSizeSmall: Platform.OS === 'ios' ? 13 : 13,
  FONT_SIZE_SMALL: Platform.OS === 'ios' ? RFValue(11) : RFValue(11),
  fontSizeNormal: Platform.OS === 'ios' ? 15 : 15,
  FONT_SIZE_NORMAL: Platform.OS === 'ios' ? RFValue(14) : RFValue(14),
  fontSizeMedium: Platform.OS === 'ios' ? 18 : 18,
  FONT_SIZE_MEDIUM: Platform.OS === 'ios' ? RFValue(16) : RFValue(16),
  fontSizeLarge: Platform.OS === 'ios' ? 24 : 24,
  FONT_SIZE_LARGE: Platform.OS === 'ios' ? RFValue(25) : RFValue(25),
  fontSizeXL: Platform.OS === 'ios' ? 24 : 21,
  FONT_SIZE_XL: Platform.OS === 'ios' ? RFValue(24) : RFValue(21),
  fontSizeXXL: Platform.OS === 'ios' ? 39 : 36,
  FONT_SIZE_XXL: Platform.OS === 'ios' ? RFValue(39) : RFValue(36),

  ICON_SIZE_NORMAL: 18,
  ICON_SIZE_MEDIUM: 22,
  ICON_SIZE_LARGE: 26,

  FONT_WEIGHT_LIGHT: Platform.OS === 'ios' ? '300' : '300',
  FONT_WEIGHT_REGULAR: Platform.OS === 'ios' ? '500' : '500',
  FONT_WEIGHT_MEDIUM: Platform.OS === 'ios' ? '600' : '600',
  FONT_WEIGHT_BOLD: Platform.OS === 'ios' ? '800' : '800',
  FONT_WEIGHT_EXTRA_BOLD: Platform.OS === 'ios' ? '900' : '900',

  fontWeightBold: Platform.OS === 'ios' ? '700' : '700',

  placeholderTextColor: '#ffcc00',
  placeholderTextWhite: 'rgba(255,255,255, .38)',
  letterSpacingSmall: 0.8,
  letterSpacingMedium: 1.4,
  letterSpacingLarge: 1.8,
  bottomBorderHighlighted: 2,
  bottomBorderRegular: 1,


  PADDING: 14,
  PADDING_SMALL: 8,
  PADDING_MEDIUM: 17,
  PADDING_LARGE: 32,
  PADDING_EXTRA_SMALL: 3,

  BORDER_RADIUS: 10,
  BORDER_RADIUS_SMALL: 5,

  padding: 16,
  paddingSmall: 8,
  paddingMedium: 24,
  paddingLarge: 32,
  elevation: 4,
  spinnerSizeLarge: Platform.OS === 'ios' ? 'large' : 80,

  HEADER_HEIGHT: Platform.OS === 'ios' ? 44 : 56,

  MARGIN_BOTTOM_MODAL: Platform.OS === 'ios' ? 35 : 10,
};

const FONT_WEIGHT_NORMAL = {
  fontWeight: theme.FONT_WEIGHT_LIGHT,
  ...Platform.select({
    ios: {
      fontFamily: 'Avenir',
    },
    android: {
      fontFamily: 'arial',
    },
  }),
};

const textBasic = {
  color: theme.black,
  ...FONT_WEIGHT_NORMAL,
};

const textStyles = {
  textXS: {
    ...textBasic,
    fontSize: theme.FONT_SIZE_XS,
  },

  textSM: {
    ...textBasic,
    fontSize: theme.FONT_SIZE_SMALL,
  },

  text: {
    ...textBasic,
    fontSize: theme.FONT_SIZE_NORMAL,
  },

  textMD: {
    ...textBasic,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },

  textLG: {
    ...textBasic,
    fontSize: theme.FONT_SIZE_LARGE,
  },

  textXL: {
    ...textBasic,
    fontSize: theme.fontSizeXL,
  },

  textXXL: {
    ...textBasic,
    fontSize: theme.fontSizeXXL,
  },
};

const headerMaxHeight = 200;
const HEADER_MAX_HEIGHT = 200;

export {
  theme,
  textStyles,
  headerMaxHeight,
  APPBAR_HEIGHT,
  STATUSBAR_HEIGHT,
  TITLE_OFFSET,
  HEADER_MAX_HEIGHT,
};
