const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ANTD_THEME } = require('../src/theme')

module.exports = ({ entryDir, outputDir, htmlPath }) => ({
  entry: path.join(__dirname, entryDir),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputDir),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      modules: path.join(__dirname, '../src/modules'),
      components: path.join(__dirname, '../src/components'),
      theme: path.join(__dirname, '../src/theme'),
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin(['API_URL']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, htmlPath),
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(less)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: ANTD_THEME,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
})
