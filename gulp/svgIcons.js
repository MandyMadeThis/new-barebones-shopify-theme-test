var constants = require('../constants.js'),
    notify = require('./notify.js'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    svgstore = require('gulp-svgstore');


gulp.task('svgIcons', ['clean'], function() {
    return gulp.src('./src/icons/**/*.svg')
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore({fileName: 'icons.svg', inlineSvg: true}))
        .pipe(gulp.dest(constants.destPath));
});