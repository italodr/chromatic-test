const path = require('path');

const MAX_ASSET_SIZE = 1024 * 1024 * 2;
const DEVELOPMENT_ENV = process.env.NODE_ENV === 'development';

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async config => {
    config.resolve.alias['@/components'] = path.resolve(__dirname, '../src/components');
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 30 * 1024,
      maxSize: MAX_ASSET_SIZE,
    };
    config.performance.maxAssetSize = MAX_ASSET_SIZE;
    config.performance.maxEntrypointSize = MAX_ASSET_SIZE;
    // config.devtool = DEVELOPMENT_ENV ? 'cheap-module-eval-source-map' : false;

    return config;
  },
};
