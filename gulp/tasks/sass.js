var gulp       = require('gulp')
var sass       = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var config     = require('../config');

gulp.task('sass', function () {
  return sass(config.styles.src)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(livereload());
});