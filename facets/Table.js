/*
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/Table.hbs");
    let Facet = require("../facets/Facet");

    class Table extends Facet {
        constructor() {
            super(template);
        }
    }

    return Table;
});
