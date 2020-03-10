/*
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/ButtonGroup.hbs");
    let Facet = require("../facets/Facet");

    class ButtonGroup extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
            this.buttons = [];
        }

        button(btn) {
            /* Adds button to group
            */
            this.buttons.push(btn);
            return this;
        }

        render() {
            /* We should reuse as much of the Button rendering as possible. But
               we do need to override certain aspects of styling.
            */
            this.parameters.nButtons = this.buttons.length;
            this.parameters.buttons = this.buttons.map(function(btn) {
                return btn.render(); // can't transcribe without loosing attached events
            });
            this.subdom = super.render();
            let children = this.subdom.querySelector(".ButtonGroup").children;
            Array.from(children).forEach(function(div, ndx) {
                div.appendChild(this.parameters.buttons[ndx]);
            }, this);
            this.attach();
            return this.subdom;
        }
    }

    return ButtonGroup;
});
