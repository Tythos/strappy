/*
*/

require.config({
    "paths": {
        "hbs": "lib/hbs-loader-v1.0.0.min",
    }
});

require(["lib/handlebars-v4.0.12.min", "../facets/Button", "lib/Animaniac-v1.1.0.min"], function(handlebars, Button, Animaniac) {
    function onButtonClick(event) {
        console.log("the button has been clicked!", event);
        new Animaniac()
            .element(event.target)
            .prop("opacity", [1, 0])
            .duration(0.5)
            .start();
    }

    function renderLayout(rawHbs) {
        let template = handlebars.compile(rawHbs);
        window.document.body.innerHTML = template({
            "year": (new Date()).getUTCFullYear(),
            "org": "Tythos Creatives, LLC",
            "paragraphs": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices dolor at pretium fermentum. Aliquam nunc enim, ultrices quis blandit in, accumsan at dui. Morbi egestas tincidunt justo sit amet semper. Nunc pellentesque id urna et finibus. Aliquam dictum nulla auctor risus pellentesque, eu.",
                "Etiam porttitor scelerisque nisl in laoreet. Morbi tincidunt ante nibh, nec sagittis nibh placerat non. Pellentesque ac ullamcorper turpis. Nam sollicitudin tortor vitae lacinia varius. Aliquam purus lacus, porttitor eu ex sed, sagittis lacinia metus. Cras lobortis magna sed rutrum pulvinar. Morbi.",
                "Aliquam eget massa magna. Curabitur ornare erat in vulputate sagittis. Maecenas volutpat, elit a tempor semper, purus odio tempus quam, sit amet mollis lectus enim in nisl. Integer commodo congue lacus, id cursus orci efficitur hendrerit. Morbi varius consequat sodales. Aliquam convallis eros pellentesque."
            ]
        });

        window.document.body.querySelector(".Content").appendChild(
            (new Button())
            .param("variant", "success")
            .param("label", "My Button")
            .on("click", onButtonClick)
            .render()
        );
    }

    fetch("hbs/layout.hbs")
        .then((response) => { return response.text(); })
        .then((body) => { renderLayout(body); });
});
