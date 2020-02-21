/*
*/

define(function(require, exports, module) {
    let template = require("hbs!hbs/Breadcrumbs.hbs");
    let Facet = require("facets/Facet");

    class Breadcrumbs extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
            this.parameters.labels = [];
            this.parameters.hrefs = [];
        }

        item(label, href) {
            /*
            */
            this.parameters.labels.push(label);
            this.parameters.hrefs.push(href ? href : null);
            return this;
        }

        render() {
            let subdom = super.render();
            let ai = subdom.querySelectorAll("a");
            Array.from(ai).forEach(function(a, ndx) {
                if (this.parameters.hrefs[ndx]) {
                    a.setAttribute("href", this.parameters.hrefs[ndx]);
                }
            }, this);
            return subdom;
        }
    }

    return Breadcrumbs;
});
