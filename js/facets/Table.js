/*
*/

define(function(require, exports, module) {
    let Facet = require("facets/Facet");
    let template = require("hbs!hbs/Table.hbs");

    class Table extends Facet {
        constructor(parameters) {
            super(template, parameters);
        }
    }

    return Table;
});
