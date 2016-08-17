var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    constants = require('../constants.js'),
    notify = require('./notify.js');

// scss —> Expanded/Readable CSS file
gulp.task('scss', ['clean'], function () {
  gulp.src('src/scss/style.scss')
    .on('error', notify)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(constants.destPath));
});