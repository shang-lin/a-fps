AFRAME.registerComponent('enemy', {
    init: function() {
        var el = this.el;
        el.addEventListener('collide', function(e) {
            console.log("I'm hit by", e.detail.body.el.id);
            el.parentNode.removeChild(el);
        });
    }

});