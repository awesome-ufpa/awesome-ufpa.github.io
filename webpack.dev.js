const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js',
    contentBase: './public/',
    publicPath: 'http://127.0.0.1:3000/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    moduleDirectiories: ['node_modules'],
  },
};
