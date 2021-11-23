const { src } = require('./path');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(src, 'popup.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: path.resolve(__dirname, '../popup.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
};
