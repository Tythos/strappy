/*
*/

define(function(require, exports, module) {
    let handlebars = require("lib/handlebars-4.0.12");

    exports.load = function(name, parentRequire, onload, config) {
        /*
        */
        fetch(name).then((response) => {
            return response.text();
        }).then((text) => {
            let template = handlebars.compile(text);
            template.render = function(context) {
                let div = window.document.createElement("div");
                div.innerHTML = this(context);
                return div;
            };
            onload(template);
        });
    };
});
