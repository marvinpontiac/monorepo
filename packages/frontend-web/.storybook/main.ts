import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname, join } from 'path';

const STORIES = `../src/sites/bcbst/**/*.stories.@(js|jsx|mjs|ts|tsx)`;
const DOCS = `../src/sites/bcbst/**/*.mdx`;
const STATIC_DIRS = `../src/sites/bcbst/public`;

const config: StorybookConfig = {
  stories: [DOCS, STORIES],
  staticDirs: [STATIC_DIRS],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-a11y")
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        LAST_CHANCE: path.resolve(
          __dirname,
          `../src/sites/${process.env.STORYBOOK_SITE}/styles/index.scss`
        ),
        '@site-theme': path.resolve(
          __dirname,
          `../src/sites/${process.env.STORYBOOK_SITE}/styles/index.scss`
        ),
        '@global-components': path.resolve(__dirname, '../src/global/components'),
      };
    }

    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
