'use strict';

/* browserify task
   ---------------
   Bundle javascripty things with browserify!
   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var babelify     = require('babelify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundlelogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleerrors');
var sourcemaps   = require('gulp-sourcemaps');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var gulpif       = require('gulp-if');
var uglify       = require('gulp-uglify');
var config       = require('../config');

gulp.task('browserify', function() {
  
  var isProduction  = global.isProd;
  var isDevelopment = global.isDev;
  
  var bundler = browserify({

    cache: {},
    packageCache: {},
    fullPaths: true,

    // Specify the entry point of your app
    entries: [config.entry],

    // Add file extentions to make optional in your requires
    extensions: ['.js'],
    debug: true
  });

  var transforms = [
    { 'name': babelify, 'options': { presets: ['es2015', 'stage-0']} }
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform.name, transform.options);
  });  

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()

      // Report compile errors
      .on('error', handleErrors)

      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specify the
      // desired output filename here.
      .pipe(source('bundle.js'))

      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())

      // loads map from browserify file is dev environment passed
      .pipe(gulpif(isDevelopment, sourcemaps.init({loadMaps: true})))

      // if production is passed to as a CLI argument
      .pipe(gulpif(isProduction, uglify()))                    // <- prod task
      .pipe(gulpif(isProduction, gulp.dest(config.buildDir)))  // <- prod task

      // writes map from browserify file if dev environment passed
      .pipe(gulpif(isDevelopment, sourcemaps.write('./')))

      // Specify the output destination
      .pipe(gulp.dest(config.scripts.dest))

      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    // Rebundle with watchify on changes.
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});