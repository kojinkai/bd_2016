'use strict';

var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var config = require('../config');

gulp.task('eslint', function () {

  return gulp.src([config.scripts.src, '!node_modules/**'])

    .pipe(eslint('.eslintrc'))

    .pipe(eslint.format())

    .pipe(eslint.failAfterError())

    .pipe(notify({ message: 'eslint tasks complete' }));

});