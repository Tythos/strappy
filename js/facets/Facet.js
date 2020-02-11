/*
*/

define(function(require, exports, module) {
    class Facet {
        constructor(template, parameters) {
            /*
            */
            this.subdom = template.render(parameters);
            return this;
        }

        on(tag, listener) {
            /*
            */
            switch (tag.toUpperCase()) {
                default:
            }
            return this;
        }

        render() {
            /*
            */
            return this.subdom;
        }

        select(selector) {
            /*
            */
            return this.subdom.querySelector(selector);
        }

        selects(selector) {
            /*
            */
            return Array.from(this.subdom.querySelectorAll(selector));
        }
    }

    return Facet;
});
