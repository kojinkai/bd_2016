'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config');

gulp.task('browserSync', function() {

  browserSync.init({
    server: config.buildDir,
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });
});
