/* Alerts will fade out a certain amount of time after they are rendered.
*/

define(function(require, exports, module) {
    let template = require("hbs!facets/Alert.hbs");
    let Facet = require("../facets/Facet");
    let Animaniac = require("lib/Animaniac-1.0.0");

    class Alert extends Facet {
        constructor() {
            super(template);
            this.tDisplay_s = 1.0;
            this.tFadeout_s = 1.0;
            this.subdom = null;
        }

        render() {
            this.subdom = super.render();
            this.hTimeout = setTimeout(this.onFadeTimer.bind(this), this.tDisplay_s * 1e3);
            return this.subdom;
        }

        onFadeTimer(event) {
            /* Initiates fadeout animation, after which onFadeFinished is invoked
            */
            let a = new Animaniac();
            a.element = this.subdom;
            a.duration = this.tFadeout_s * 1e3;
            a.properties = { "opacity": [1.0, 0.0] };
            a.callback = this.onFadeFinished.bind(this);
            a.start();
        }

        onFadeFinished() {
            this.subdom.remove();
        }
    }

    return Alert;
});
