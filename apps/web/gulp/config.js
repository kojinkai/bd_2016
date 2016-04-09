module.exports = {
  styles: {
    src:  './scss/**/*.scss',
    dest: './clientlibs-site/css'
  },
  scripts: {
    client: {
      src: ['./app/**/*.js'],
      dest: './clientlibs-site/js'
    },
    gulp: {
      src: './gulp/**'
    },
    concat: {
      src: [
        './bower_components/jquery/jquery.js',
        './js/polyfills/*.js',
        './js/plugins/*.js',
        './js/app.js'
      ]
    }
  }
};