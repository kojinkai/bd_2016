var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
});