import { addons } from 'storybook/manager-api';
import acsTestStorybookTheme from './themes/acs-test';

const themeMap = {
  acsTest: acsTestStorybookTheme,
};

function setTheme(env) {
  let theme = env.split('/').pop();
  return themeMap[theme];
}

addons.setConfig({
  theme: setTheme(process.env.STORYBOOK_SITE),
});
