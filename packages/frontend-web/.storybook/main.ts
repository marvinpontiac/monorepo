import type { StorybookConfig } from '@storybook/nextjs-vite';
import path, { dirname, join } from 'path';

const STORIES = `../src/sites/bcbst/**/*.stories.@(js|jsx|mjs|ts|tsx)`;
const DOCS = `../src/sites/bcbst/**/*.mdx`;
const STATIC_DIRS = `../src/sites/bcbst/public`;

const config: StorybookConfig = {
  stories: [DOCS, STORIES],
  staticDirs: [STATIC_DIRS],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs")
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config.plugins) {
      config.plugins = [...config.plugins];
    }

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
        '@docs-components': path.resolve(__dirname, '../src/sites/bcbst/docs'),
      };

      if (!config.resolve.extensions) {
        config.resolve.extensions = ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.mdx'];
      } else {
        config.resolve.extensions.push('.mdx');
      }
    }

    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
