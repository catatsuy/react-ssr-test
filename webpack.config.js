var path = require('path');
//var webpack = require('webpack');

module.exports = {
  entry: './browser.js',
  output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      }
    ]
  },
};
