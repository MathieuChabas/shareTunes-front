/**
 * Created by mathieu on 24/02/16.
 */
(function(d, p){
    var a = new XMLHttpRequest(),
        b = d.body;
    a.open('GET', p, true);
    a.send();
    a.onload = function() {
        var c = d.createElement('div');
        c.setAttribute('hidden', '');
        c.innerHTML = a.responseText;
        b.insertBefore(c, b.childNodes[0]);
    };
})(document, 'bower_components/plyr/dist/sprite.svg');