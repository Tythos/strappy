/*
*/

define(function(require, exports, module) {
    let template = require("hbs!hbs/Button.hbs");
    let Facet = require("facets/Facet");

    class Button extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
        }

        attach(subdom) {
            /*
            */
            let button = subdom.querySelector("button");
            if (this.listeners.CLICK) {
                this.listeners.CLICK.forEach(function(listener) {
                    button.addEventListener("click", listener);
                });
            }
            return subdom;
        }
    }

    return Button;
});
