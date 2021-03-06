const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
  ],babel: async (options) => {
    return {
      ...options,
    };
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // here we use babel-loader
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
        presets: [
          '@babel/preset-typescript',
          [
            '@babel/preset-react', 
            {
              runtime: 'automatic',
            },
          ],
        ],
        plugins: [
          ['@babel/plugin-proposal-nullish-coalescing-operator'],
          ['@babel/plugin-proposal-optional-chaining'],
        ],
      },
    });

    config.resolve.modules = [
      path.resolve(__dirname, '../', 'node_modules'),
      'node_modules',
    ];

    config.resolve.extensions.push('.ts', '.tsx');

    config.stats = 'verbose';

    // Return the altered config
    return config;
  },
};