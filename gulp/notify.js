var gulp = require('gulp'),
    notify = require('gulp-notify');

// Give us a notification when we've messed up
var handleErrors = function() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification centre with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '\n<%=error.message%'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}

module.exports = handleErrors;