const path = require('path');
const webpack = require('webpack');
require("dotenv").config();
module.exports = {
  entry: path.join(__dirname, './client/src/index.jsx'),
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'AUTH_SECRET': process.env.AUTH_SECRET
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}