module.exports = {
  
  browserPort: 3001,
  UIPort: 3002,
  testPort: 3003,

  sourceDir: './app/',
  buildDir: './build/',
  entry: './app/app.js',

  styles: {
    src:  ['./app/components/**/*.scss', './app/stylesheets'],
    dest: '../build/styles',
    sassIncludePaths: []
  },

  scripts: {
    src: './app/**/*.js',
    dest: './build/js',
    gulp: './gulp/**'
  }
};