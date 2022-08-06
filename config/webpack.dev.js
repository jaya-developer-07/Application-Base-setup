/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const createWebpackBase = require('./webpack.base')

const baseWebpackConfig = (module.exports = createWebpackBase({
  entryDir: '../src/index.js',
  outputDir: '../build',
  htmlPath: '../src/index.html',
}))

const devWebpackConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    static: path.join(__dirname, '../build'),
    port: 3000,
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new FriendlyErrorsWebpackPlugin(),
  ],
}

module.exports = merge(baseWebpackConfig, devWebpackConfig)
