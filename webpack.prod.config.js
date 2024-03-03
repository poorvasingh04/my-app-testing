const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const PUBLIC_URL = process.env.PUBLIC_URL || '/public';
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL,
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/**/*'
        }
      ]
    })
  ]
});
