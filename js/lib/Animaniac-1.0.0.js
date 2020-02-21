/* Object for DOM animation management of style properties.
*/

define(function(require, exports, module) {
    function Animaniac() {
        /* Initializes animation object with default parameters. Users will
           typically assign the following properties before calling "start()":
            * element (the relevant DOM element)
            * properties (style property keys with 2-element initial/final values Array)
            * callback (what to invoke when the transition has finished)
        */
        this.handle = null;
        this.started = new Date();
        this.interval = 10; // ms
        this.element = null;
        this.properties = {};
        this.duration = 1000;
        this.callback = function() {};
        return this;
    };

    Animaniac.prototype.start = function() {
        /* Kicks off setInterval() call to update animation properties.
        */
        this.started = new Date();
        this.handle = setInterval(this.onInterval.bind(this), this.interval);
    };

    Animaniac.prototype.onInterval = function() {
        /* Updates style properties via interpolation. Upon completion, final
           properties are assigned and interval handle is cleared.
        */
        let dt_ms = (new Date()) - this.started;
        let pct = dt_ms / this.duration;
        Object.keys(this.properties).forEach(function(key) {
            let values = this.properties[key];
            this.element.style[key] = values[0] + pct * (values[1] - values[0]);
        }, this);
        if (pct >= 1.0) {
            Object.keys(this.properties).forEach(function(key) {
                this.element.style[key] = this.properties[key][1];
            }, this);
            clearInterval(this.handle);
            this.callback();
        }
    };

    return Animaniac;
});
