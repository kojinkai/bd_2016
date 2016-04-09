var express           = require('express');
var path              = require('path');
var favicon           = require('serve-favicon');
var logger            = require('morgan');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var device            = require('express-device');
var webpack           = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var routes            = require('./routes/index');
var about             = require('./routes/about');

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';
app.locals.IS_MOBILE = true;

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/apps/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(device.capture());

device.enableDeviceHelpers(app);

// app.use(express.static(path.join(__dirname, 'apps/web/build')));
app.use(express.static(path.join(__dirname, 'apps/web/app/build')));
// app.use(express.static(path.join(__dirname, 'apps/mobile/build')));

app.use('/', routes);
app.use('/about', about);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error'
    });
  });
}

app.use(webpackMiddleware(webpack({
  // webpack options
  // webpackMiddleware takes a Compiler object as first parameter
  // which is returned by webpack(...) without callback.
  entry: "...",
  output: {
      path: "/"
      // no real path is required, just pass "/"
      // but it will work with other paths too.
  }
}), {
  // all options optional

  noInfo: false,
  // display no info to console (only warnings and errors)

  quiet: false,
  // display nothing to the console

  lazy: true,
  // switch into lazy mode
  // that means no watching, but recompilation on every request

  watchOptions: {
      aggregateTimeout: 300,
      poll: true
  },
  // watch options (only lazy: false)

  publicPath: "/apps/web/app/build",
  // public path to bind the middleware to
  // use the same as in webpack

  // headers: { "X-Custom-Header": "yes" },
  // custom headers

  stats: {
      colors: true
  }
  // options for formating the statistics
}));

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error'
  });
});


module.exports = app;
