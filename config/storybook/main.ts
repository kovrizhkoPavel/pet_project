import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config) => {
    config?.module?.rules?.push({
      test: /\.tsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript'],
        },
      },
      exclude: /node_modules/,
    });
    config?.resolve?.extensions?.push('.ts', '.tsx');
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../../public'],
};
export default config;
