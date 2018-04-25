AFRAME.registerComponent('enemy', {
    init: function() {
        var el = this.el;
        el.addEventListener('collide', function(e) {
            console.log("I'm hit!");
            el.parentNode.removeChild(el);
        });
    }

});