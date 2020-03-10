/*
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/Badge.hbs");
    let Facet = require("../facets/Facet");

    class Badge extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
        }

        render() {
            /* To ensure inline, we need to extract child elements from the
               top-level <div/> wrapper returned from template rendering.
            */
            let parent = this.template.render(this.parameters);
            this.subdom = parent.children[0];
            this.attach();
            return this.subdom;
       }
    }

    return Badge;
});
