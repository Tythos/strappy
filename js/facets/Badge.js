/*
*/

define(function(require, exports, module) {
    let template = require("hbs!hbs/Badge.hbs");
    let Facet = require("facets/Facet");

    class Badge extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
        }

        render() {
            /* To ensure inline, we need to extract child elements from the
               top-level <div/> wrapper returned from template rendering.
            */
           let subdom = this.template.render(this.parameters);
           subdom = this.attach(subdom);
           return subdom.children[0];
       }
    }

    return Badge;
});
