
/* bundleLogger
------------
Provides gulp style logs to the bundle method in browserify.js
Note the JSHint override above.  This a rare, and hopefully
isolated case where we need to override the .jshintrc
*/

var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function() {
    startTime = process.hrtime();
    gutil.log('Running', gutil.colors.green('bundle') + '...');
  },

  end: function() {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Finished', gutil.colors.green('bundle'), 'in', gutil.colors.magenta(prettyTime));
  }
};