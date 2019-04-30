const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './app/public/src')
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { 
                presets: ['@babel/preset-env', '@babel/preset-react']

          } 
          }
        ]
      }
    ]
  }
};