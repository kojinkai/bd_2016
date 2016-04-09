var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var config = require('../config');

gulp.task('eslint', function() {
  return gulp.src(config.scripts.client.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({ message: 'JSHint app complete' }));
});