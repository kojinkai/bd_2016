'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {

  cb = cb || function() {};

  global.isProd = false;
  global.isDev  = true;

  runSequence('watch', cb);

});