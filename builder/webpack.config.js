const path = require('path');

const src = path.resolve(__dirname, '..', 'src');
const dist = path.resolve(__dirname, '..', 'dist');

module.exports = {
  entry: path.resolve(src, 'floom', 'index.js'),
  output: {
    filename: 'floom.min.js',
    library: 'floom',
    libraryTarget: 'umd',
    path: dist,
  },
  resolve: {
    alias: {
      '@': src,
    },
  },
  module: {
    rules: [{
      test: /\.(c|m)?js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      }],
    }],
  },
};
