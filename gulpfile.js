var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp');

// Default gulp action when 'gulp' command is run
gulp.task('default',
    ['images',
    'browserify',
    'scss',
    'svgIcons',
    'shopifywatch',
    'watch'
    ]
);