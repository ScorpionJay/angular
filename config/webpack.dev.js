var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    // 打开浏览器
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

  debug: true
});
