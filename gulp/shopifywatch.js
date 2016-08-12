var gulp = require('gulp'),
    gulpShopify = require('gulp-shopify-upload'),
    config = require('../config.json'),
    watch = require('gulp-watch'),
    constants = require('../constants.js');

// Watch our theme folder for changes
gulp.task('shopifywatch', ['clean'], function() {
    var options = {
        "basePath": constants.themePath
    };

    return watch(constants.themePath + '+(assets|layout|config|snippets|templates|locales)/**')
        .pipe(gulpShopify(config.shopify_api_key, config.shopify_api_password, config.shopify_url, config.theme_id, options));
});