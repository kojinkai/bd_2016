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
        include: [
          path.resolve(__dirname, 'app'),
        ],
        plugins: ['transform-decorators'],
        query: {
            presets: ['es2015', 'stage-0']
        }        
      }
    ]
  }
}