/*
*/

define(function(require, exports, module) {
    let template = require("hbs!hbs/Card.hbs");
    let Facet = require("facets/Facet");
    let Button = require("facets/Button");

    class Card extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
            this.parameters.button = null;
            this.parameters.width = 256;
        }

        attach(subdom) {
            /*
            */
            let btn = subdom.querySelector("button");
            if (this.listeners.CLICK) {
                this.listeners.CLICK.forEach(function(listener) {
                    btn.addEventListener("click", listener);
                });
            }
            return subdom;
        }

        render() {
            /*
            */
            let subdom = this.template.render(this.parameters);
            if (this.parameters.button) {
                subdom.querySelector(".Card").appendChild((new Button())
                    .param("variant", this.parameters.variant)
                    .param("label", this.parameters.button)
                    .render()
                );
            }
            subdom = this.attach(subdom);
            return subdom;
        }
    }

    return Card;
});
