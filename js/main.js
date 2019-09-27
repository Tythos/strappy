/*
*/

require(["handlebars", "quajax", "responsive"], function(handlebars, quajax, responsive) {
    responsive();
    
    quajax.get("hbs/example.hbs", function(hbs) {
        let template = handlebars.compile(hbs);
        document.body.innerHTML = template({
            "name": "Kirk",
            "age": 34,
            "food": "bbq"
        });
    });
});
