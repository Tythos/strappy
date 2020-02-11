/*
*/

require.config({
    "paths": {
        "hbs": "lib/hbs-loader-1.0.0",
    }
});

require(["facets/Table", "facets/TitlePair", "facets/Button"], function(Table, TitlePair, Button) {
    function onBtnClick(event) {
        console.log("Button clicked:", event, event.factor);
    }

    function onBtnHover(event) {
        console.log("Button hovered:", event, event.factor);
    }

    let content = window.document.querySelector(".Content");

    content.appendChild((new Table({
        "name": "Kirk",
        "age": 34,
        "food": "bbq"
    })).render());

    content.appendChild((new TitlePair({
        "title": "Kirk",
        "subtitle": `${34} years old`
    })).render());

    content.appendChild((new Button({
        "label": "My Button"
    }))
        .on("CLICK", onBtnClick)
        .on("HOVER", onBtnHover)
        .render()
    );
});
