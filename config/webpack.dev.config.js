const path = require('path');
const webpack = require('webpack');

const include = [ path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../examples/') ];

module.exports = {
  devtool: 'source-maps',
  entry: [
    './examples/scss/default.scss',
    './examples/js/index'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000' },
      { test: /\.(s)*css$/, loader: "style!css!sass" }
    ]
  }
};
