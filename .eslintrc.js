const path = require('path');
const webpackConfig = path.resolve(__dirname, './builder/webpack.config.js');

const OFF = 'off';
const ERROR = 'error';
const PRODUCTION = 'production';

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig,
      },
    },
  },
  plugins: ['import'],
  extends: [
    'airbnb-base',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === PRODUCTION ? ERROR : OFF,
    'no-debugger': process.env.NODE_ENV === PRODUCTION ? ERROR : OFF,
    'import/no-extraneous-dependencies': OFF,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
