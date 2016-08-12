var $ = require('jquery');

var example = {

  init: function() {
    this.yourFunction();
  },

  yourFunction: function() {
    console.log('inside example.js');
  }
}

module.exports = example;