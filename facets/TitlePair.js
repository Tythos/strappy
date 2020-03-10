/*
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/TitlePair.hbs");
    let Facet = require("../facets/Facet");

    class TitlePair extends Facet {
        constructor() {
            super(template);
        }
    }

    return TitlePair;
});
