//This recipe came from a combo of this: http://anunexpectedcoder.com/blog/2015/12/03/dont-fence-me-in-how-to-use-gulp-with-shopify-and-timber-to-gain-control-of-your-front-end/ and this: https://gist.github.com/danharper/3ca2273125f500429945

var gulp = require('gulp'),
    constants = require('../constants.js'),
    notify = require('./notify.js'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('babelify');


// JavaScripty Tings
gulp.task('browserify', function() {
  return browserify('./src/js/app.js')
      .bundle()
      .on('error', notify)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      // Start piping stream to tasks!
      .pipe(gulp.dest(constants.destPath));
});