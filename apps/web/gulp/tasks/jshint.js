'use strict';

// separate task configured here
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var config = require('../config');

gulp.task('jshint', function() {
  return gulp.src(config.scripts.gulp)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({ message: 'JSHint tasks complete' }));
});