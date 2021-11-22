const { src } = require('./path');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: path.resolve(src, 'popup.jsx'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader'],
        exclude: /(node_modules)/
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'popup.html',
    //   template: path.resolve(__dirname, '../src/popup.html')
    // }),
    new webpack.ProgressPlugin(),
  ],
}