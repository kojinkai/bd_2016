var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      { 
        test: /.js$/, 
        loader: 'babel-loader',
        exclude: 'node_modules/',
        query: {
            presets: ['es2015']
        }        
      }
    ]
  }
}