//This recipe came from a combo of this: http://anunexpectedcoder.com/blog/2015/12/03/dont-fence-me-in-how-to-use-gulp-with-shopify-and-timber-to-gain-control-of-your-front-end/ and this: https://gist.github.com/danharper/3ca2273125f500429945

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gulpShopify = require('gulp-shopify-upload'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    config = require('../config.json'),
    constants = require('../constants.js'),
    babel = require('babelify');

// Watch all the things
gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['scss']);
    gulp.watch('./src/js/**/*.js', ['browserify']);
    gulp.watch('./src/images/**/*.{jpg,jpeg,png,gif,svg}', ['images']);
    gulp.watch('./src/icons/**/*.svg', ['svgIcons']);

    var watcher = watchify(browserify({
        // Specify the entry point of your app
        entries: ['./src/js/app.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }).transform(babel));

    return watcher.on('update', function() {
        watcher.bundle()
            .pipe(source('./src/js/app.js'))
            .pipe(gulp.dest(constants.destPath))
    })
});