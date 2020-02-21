/*
*/

define(function(require, exports, module) {
    let Facet = require("facets/Facet");
    let template = require("hbs!hbs/TitlePair.hbs");

    class TitlePair extends Facet {
        constructor() {
            super(template);
        }
    }

    return TitlePair;
});
