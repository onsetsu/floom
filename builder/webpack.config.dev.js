const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const src = path.resolve(__dirname, '..', 'src');
const dist = path.resolve(__dirname, '..', 'dist', 'demo');

module.exports = {
  target: 'web',
  entry: path.resolve(src, 'demo', 'index.js'),
  output: {
    filename: 'main.js',
    path: dist,
  },
  resolve: {
    alias: {
      '@': src,
    },
  },
  module: {
    rules: [
      {
        test: /\.(c|m)?js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        }],
      },
      {
        test: /\.css?$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: false,
      filename: 'index.html',
      template: path.resolve(src, 'demo', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      ignoreOrder: false,
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    hot: true,
    overlay: true,
    compress: true,
    stats: 'errors-warnings',
  },
};
