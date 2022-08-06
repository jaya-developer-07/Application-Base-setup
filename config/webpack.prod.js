const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const createWebpackBase = require('./webpack.base')

const baseWebpackConfig = (module.exports = createWebpackBase({
  entryDir: '../src/index.js',
  outputDir: '../build',
  htmlPath: '../src/index.html',
}))

const prodWebpackConfig = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)
