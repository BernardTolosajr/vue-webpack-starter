'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
      {
          test: /\.styl$/,
          loaders: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      },
      {
          test: /\.js$/,
          loader: 'babel-loader'
      },
      {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
   // new CopyWebpackPlugin([{
   //   from: resolve('static/img'),
   //   to: resolve('dist/static/img'),
   //   toType: 'dir'
   // }])
  ]
}
