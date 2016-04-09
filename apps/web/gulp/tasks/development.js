'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {
  
  console.log('running development');
  cb = cb || function() {};

  global.isProd = false;
  global.isDev  = true;
  
  console.log(global.isProd);

  runSequence(['browserify'], 'watch', cb);

});