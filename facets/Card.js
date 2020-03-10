/* Cards are... strange. Really, they're just a wrapper for DOM content. But
   they also assume some basic degree of default structure/content/layout. I'm
   not too ashamed, therefore, to specify a more constrained use case: image;
   title; and text. More content can be added (or genericized) in a future
   release. (This simplifies event routing: there isn't any.)
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/Card.hbs");
    let Facet = require("../facets/Facet");
    let Button = require("../facets/Button");

    class Card extends Facet {
        constructor() {
            super(template);
            this.parameters.variant = "PRIMARY";
            this.parameters.button = null;
            this.parameters.width = 256;
        }

        render() {
            /*
            */
            this.subdom = this.template.render(this.parameters);
            if (this.parameters.button) {
                this.subdom.querySelector(".Card").appendChild((new Button())
                    .param("variant", this.parameters.variant)
                    .param("label", this.parameters.button)
                    .render()
                );
            }
            this.attach();
            return this.subdom;
        }
    }

    return Card;
});
