'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  
  global.isWatching = true;

  // Styles
  gulp.watch(config.styles.src, ['styles']);

  // Client JavaScripts
  gulp.watch(config.scripts.src, ['eslint']);

  // Gulp Automation JavaScripts
  gulp.watch(config.scripts.gulp, ['jshint']);

});