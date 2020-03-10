/*
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/Carousel.hbs");
    let Facet = require("../facets/Facet");
    let Animaniac = require("lib/Animaniac-1.0.0");

    class Carousel extends Facet {
        constructor() {
            /*
            */
            super(template);
            this.parameters.items = [];
            this.parameters.tPerSlide_s = 4.0;
            this.parameters.tTransition_s = 0.5;
            this.parameters.width = 800;
            this.currentSlide_ndx = 0;
            this.hDelayTimeout = null;
        }

        item(slide, title, caption) {
            /*
            */
            this.parameters.items.push({
                "slide": slide,
                "title": title,
                "caption": caption
            });
            return this;
        }

        render() {
            /*
            */
            this.subdom = super.render();
            this.attach();
            this.currentSlide_ndx = 0;
            this.hDelayTimeout = setInterval(this.onTransition.bind(this), this.parameters.tPerSlide_s * 1e3);
            return this.subdom;
        }

        onTransition(event) {
            /* Fired whenever a delay timeout expires. Triggers slide
               transition animation.
            */
            let next_ndx = (this.currentSlide_ndx + 1) % this.parameters.items.length;
            let fadeIn = new Animaniac();
            fadeIn.properties = { "opacity": [0, 1] };
            fadeIn.element = this.subdom.querySelector(`.CarouselItem${next_ndx}`);
            fadeIn.interval = this.tTransition_s * 1e3;
            fadeIn.start();
            let fadeOut = new Animaniac();
            fadeOut.properties = { "opacity": [1, 0] };
            fadeOut.element = this.subdom.querySelector(`.CarouselItem${this.currentSlide_ndx}`);
            fadeOut.interval = this.tTransition_s * 1e3;
            fadeOut.start();
            this.currentSlide_ndx = next_ndx;
        }
    }

    return Carousel;
});
