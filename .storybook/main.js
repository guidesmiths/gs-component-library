const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
      })
    );

    config.module.rules.push({
      test: /\.(css|pcss)$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {},
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
            modules: {
              localIdentName: '[path]__[name]__[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: 'inline',
            config: {
              path: path.resolve(__dirname, './config/postcss.config.js'),
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });
    return config;
  },
};
