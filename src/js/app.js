var example = require('./example');

var app = {

  init: function() {
    injectSvgSprite.init();
    example.init();
  }

}

$(document).ready(function(){
    app.init();
});