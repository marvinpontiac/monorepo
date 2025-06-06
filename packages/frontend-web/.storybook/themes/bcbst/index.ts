import { create } from 'storybook/theming/create';
import {
  COLOR_BRAND_BLUE,
  COLOR_INTERACTIVE_PRIMARY_DEFAULT,
  COLOR_FONT_BASE,
  COLOR_GRAY_DARK32,
  COLOR_GRAY_LIGHT32,
  COLOR_GRAY_DARK64
} from './tokens.es6';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'BCBST',
  brandUrl: '/',
  brandImage: '/logo.png',
  brandTarget: '_self',

  //
  colorPrimary: COLOR_BRAND_BLUE,
  colorSecondary: COLOR_INTERACTIVE_PRIMARY_DEFAULT,

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: COLOR_GRAY_DARK32,
  appBorderRadius: 4,

  // Text colors
  textColor: COLOR_FONT_BASE,
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: COLOR_GRAY_DARK32,
  barSelectedColor: COLOR_INTERACTIVE_PRIMARY_DEFAULT,
  barBg: '#ffffff',

  // Form colors
  inputBg: COLOR_GRAY_LIGHT32,
  inputBorder: COLOR_GRAY_LIGHT32,
  inputTextColor: COLOR_GRAY_DARK64,
  inputBorderRadius: 0,
});
