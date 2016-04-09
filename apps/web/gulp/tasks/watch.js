var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch'], function() {

  // Styles
  // gulp.watch('./app/scss/**', ['sass', 'modernizr']);

  // Client JavaScripts
  gulp.watch([config.scripts.client.src], ['browserify']);

  // Gulp Automation JavaScripts
  // gulp.watch('./gulp/**', ['jshint-gulp', 'jscs']);

  // Views
  // gulp.watch(['./app/templates/**/*.{html, js}', './app/scripts/ractives/**/*.{html, ract}'], ['browserify']);

  // Images
  // gulp.watch('./app/assets/images/**', ['images']);

  // Front End Dependencies
  // gulp.watch('bower.json', ['wiredep']);

});