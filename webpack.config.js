var path = require('path');

var isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: './src/App.js',
  devtool: isDevelopment ? 'cheap-eval-source-map': 'sourcemap',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      }
    ]
  }
};
