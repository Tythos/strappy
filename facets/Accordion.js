/* Accordion wraps a set of DOM items with singular expandable headings.
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/Accordion.hbs");
    let Facet = require("../facets/Facet");

    class Accordion extends Facet {
        constructor() {
            super(template);
            this.parameters.headers = [];
            this.parameters.cards = [];
        }

        card(header, card) {
            /* Adds a card with the given title.
            */
            this.parameters.headers.push(header);
            this.parameters.cards.push(card);
            return this;
        }

        attach() {
            /*
            */
            let headers = Array.from(this.subdom.querySelectorAll(".AccordionHeader"));
            headers.forEach(function(header) {
                header.addEventListener("click", this.onAccordionToggle.bind(this));
            }, this);
        }

        onAccordionToggle(event) {
            /*
            */
            let classes = Array.from(event.target.classList);
            let ndx = parseInt(classes[1].match(/^AccordionHeader(\d+)$/)[1]);
            let entries = Array.from(this.subdom.querySelectorAll(".AccordionEntry"));
            entries.forEach(function(entry, ndxx) {
                entry.style.display = ndxx == ndx ? "block" : "none";
            });
        }

        render() {
            /*
            */
            this.subdom = super.render();
            this.parameters.cards.forEach(function(card, ndx) {
                let entry = this.subdom.querySelector(`.AccordionEntry${ndx}`);
                entry.appendChild(card.render());
            }, this);
            return this.subdom;
        }
    }

    return Accordion;
});
