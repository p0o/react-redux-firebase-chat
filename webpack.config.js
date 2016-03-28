var path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
