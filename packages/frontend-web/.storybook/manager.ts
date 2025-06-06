import { addons } from 'storybook/manager-api';
import bcbstStorybookTheme from './themes/bcbst';

const themeMap = {
  bcbst: bcbstStorybookTheme,
};

function setTheme(env) {
  let theme = env.split('/').pop();
  return themeMap[theme];
}

addons.setConfig({
  theme: setTheme(process.env.STORYBOOK_SITE),
});
