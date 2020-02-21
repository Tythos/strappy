/*
*/

define(function(require, exports, module) {
    let template = require("hbs!hbs/Carousel.hbs");
    let Facet = require("facets/Facet");
    let Animaniac = require("lib/Animaniac-1.0.0");

    class Carousel extends Facet {
        constructor() {
            /*
            */
            super(template);
            this.parameters.items = [];
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
            let subdom = super.render();
            subdom = this.attach(subdom);
            return subdom;
        }
    }

    return Carousel;
});
