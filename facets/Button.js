/*
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/Button.hbs");
    let Facet = require("Facet");

    class Button extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
        }

        attach() {
            /*
            */
            let button = this.subdom.querySelector("button");
            if (this.listeners.CLICK) {
                this.listeners.CLICK.forEach(function(listener) {
                    button.addEventListener("click", listener);
                });
            }
        }
    }

    return Button;
});
