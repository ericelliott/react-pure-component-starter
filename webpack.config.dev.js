var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  resolve: {
    root: __dirname + '/source'
  },
  entry: [
    'webpack-hot-middleware/client',
    './source/index'
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'source'),
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  }
};
