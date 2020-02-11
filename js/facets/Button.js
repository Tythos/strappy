/*
*/

define(function(require, exports, module) {
    let template = require("hbs!hbs/Button.hbs");
    let Facet = require("facets/Facet");

    class Button extends Facet {
        constructor(parameters) {
            super(template, parameters);
        }

        on(tag, listener) {
            /*
            */
            switch (tag.toUpperCase()) {
                case "CLICK":
                    this.subdom.querySelector("input").addEventListener("click", function(event) {
                        event.facet = this;
                        listener(event);
                    }.bind(this));
                    break;
                default:
            }
            return this;
        }
    }

    return Button;
});
