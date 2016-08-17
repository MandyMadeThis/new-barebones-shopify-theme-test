var $ = require('jquery');

var example = {

  init: function() {
    this.yourFunction();
  },

  yourFunction: function() {
    console.log('example.js is in the house!');
  }
}

module.exports = example;