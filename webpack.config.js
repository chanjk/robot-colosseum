const path = require('path');

const config = {
  entry: {
    src: './src'
  },

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
