/* 
* Destroys the destination folder before re-populating it.
* Clean will not run while Gulp is watching.
*/

var constants = require('../constants.js'),
    gulp = require('gulp'),
    del = require('del'),
    cleaned = false;

gulp.task('clean', function(cb) {
    
    if (!cleaned) {
        del(constants.destPath).then(function(){
            return cb();
        });
        cleaned = true;
    } else {
        return cb();
    }

});