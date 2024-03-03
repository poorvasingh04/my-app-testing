const path = require('path');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const PUBLIC_URL = process.env.PUBLIC_URL || '';
const webpack = require('webpack');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9001
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL,
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL)
    })
  ]
});