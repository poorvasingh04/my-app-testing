const path = require('path');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PUBLIC_URL = process.env.PUBLIC_URL || '';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9001,
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: '../'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL),
    })
  ]
}