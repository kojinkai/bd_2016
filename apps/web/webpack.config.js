const path              = require('path');
const autoprefixer      = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

module.exports = {
  entry: [
    path.normalize('es6-shim/es6-shim.min'),
    'reflect-metadata',
    path.normalize('zone.js/dist/zone-microtask'),
    path.resolve('app/app')
  ],
  output: {
    path: path.resolve(__dirname, 'app/build'),
    publicPath: "/assets/",
    filename: "bundle.js",
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      
      // transpile typescript
      {
        test: /\.js$/,
        loader: 'awesome-typescript',
        query: {
          doTypeCheck: false,
          useWebpackText: true
        },
        include: path.resolve('app'),
        exclude: /node_modules/
      },
      
      // remove sourcemaps from angular source
      {
        test: /\.js$/,
        include: path.resolve('node_modules/angular2'),
        loader: 'strip-sourcemap'
      },
      
      // support for .html as raw text
      { 
        test: /\.html$/,
        loader: 'raw-loader'
      },

      // SASS
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }      
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],  
  resolve: {
    extensions: ['', '.js', '.sass'],
    modulesDirectories: ['app', 'node_modules']
  }  
};
