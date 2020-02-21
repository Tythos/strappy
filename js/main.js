/*
*/

require.config({
    "paths": {
        "hbs": "lib/hbs-loader-1.0.0",
    }
});

require(["facets/Table", "facets/TitlePair", "facets/Button", "facets/Alert", "facets/Card", "facets/Accordion", "facets/Badge", "facets/Breadcrumbs", "facets/ButtonGroup", "facets/Carousel"], function(Table, TitlePair, Button, Alert, Card, Accordion, Badge, Breadcrumbs, ButtonGroup, Carousel) {
    function onBtnClick(event) {
        console.log("Button clicked:", event);
    }

    function onCardClick(event) {
        console.log("Card clicked:", event);
    }

    let content = window.document.querySelector(".Content");

    /*content.appendChild((new Table())
        .param("name", "Kirk")
        .param("age", 34)
        .param("food", "bbq")
        .render()
    );

    content.appendChild((new TitlePair())
        .param("title", "Kirk")
        .param("subtitle", `${34} years old`)
        .render()
    );

    content.appendChild((new Button())
        .param("label", "My Button")
        .param("variant", "danger")
        .on("CLICK", onBtnClick)
        .render()
    );

    content.appendChild((new Alert())
        .param("variant", "warning")
        .param("content", "THIS IS AN ALERT!")
        .render()
    );

    content.appendChild((new Card())
        .param("img", "img/borat_success.png")
        .param("title", "My Card!")
        .param("text", "This is my card. There are many like it, but this one is mine.")
        .param("width", 200)
        .on("click", onCardClick)
        .render()
    );*/

    /*content.appendChild((new Accordion())
        .card("Click Me!", (new Card()).param("text", "Hello! I'm the first one"))
        .card("Click Me.", (new Card()).param("text", "Hello! I'm another body"))
        .card("Click Me?", (new Card()).param("text", "Hello! I'm the last one").param("button", "CLICK THE CARD BUTTON ALREADY"))
        .render()
    );*/

    /*let h1 = window.document.createElement("h1");
    h1.textContent = "Ye Olde Title";
    content.appendChild(h1);
    h1.appendChild((new Badge())
        .param("label", "The Badge")
        .render()
    );*/

    /*content.appendChild((new Breadcrumbs())
        .item("Home", "#")
        .item("Library", "https://getbootstrap.com/docs/4.0/components/breadcrumb/")
        .item("Data")
        .render()
    );*/

    /*content.appendChild((new ButtonGroup())
        .button((new Button()).param("label", "One").on("CLICK", onBtnClick))
        .button((new Button()).param("label", "Two"))
        .button((new Button()).param("label", "Three"))
        .button((new Button()).param("label", "Four"))
        .render()
    );*/

    content.appendChild((new Carousel())
        .item("img/barcelona.png", "Barcelona", "It wasn't always such a nice place")
        .item("img/bruny_neck.png", "Bruny Neck", "Somewhere in Ireland, maybe? Looks nice.")
        .item("img/dublin_chapel.png", "Dublin Chapel", "Don't blame me, it's Wikipedia's random featured image feature")
        .render()
    );
});
