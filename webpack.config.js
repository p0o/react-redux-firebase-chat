var path = require('path');

var isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: './src/index.js',
  devtool: isDevelopment ? 'cheap-eval-source-map': 'sourcemap',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      }
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loader: 'transform?envify'
      }
    ]
  }
};
