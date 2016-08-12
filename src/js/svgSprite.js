var injectSvgSprite = {

    init: function(){
        var ajax = new XMLHttpRequest();
        ajax.open('GET', './icons.svg', true);
        ajax.send();
        ajax.onload = function(e) {
            var div = document.createElement('div');
                div.style.display = 'none';
                div.innerHTML = this.responseText;
            document.body.insertBefore(div, document.body.childNodes[0]);
        }
    }
    
};