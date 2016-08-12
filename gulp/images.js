var constants = require('../constants.js'),
    notify = require('./notify.js'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed');


// Minify images - YAS Please
gulp.task('images', ['clean'], function() {
  return gulp.src('./src/images/**')
    .pipe(changed(constants.destPath)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(constants.destPath))
});
