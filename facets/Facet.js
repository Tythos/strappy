/*
*/

define(function(require, exports, module) {
    let handlebars = require("lib/handlebars-4.0.12");
    handlebars.registerHelper("upper", function(str) { return str.toUpperCase(); });
    handlebars.registerHelper("lower", function(str) { return str.toLowerCase(); });

    class Facet {
        constructor(template) {
            /*
            */
            this.template = template;
            this.parameters = {};
            this.listeners = {};
            this.subdom = null;
            return this;
        }

        param(key, value) {
            /*
            */
            this.parameters[key] = value;
            return this;
        }

        on(tag, listener) {
            /*
            */
            tag = tag.toUpperCase();
            let tags = Object.keys(this.listeners);
            if (tags.indexOf(tag) < 0) {
                this.listeners[tag] = [];
            }
            this.listeners[tag].push(function(event) {
                event.facet = this;
                listener(event)
            }.bind(this));
            return this;
        }

        attach() {
            /* Given existing event listeners, the specific facet class is
               responsible for resolving specific elements within the subdom to
               which DOM events will subsequently propagate listeners. This
               method is invoked internally when render() is called. Therefore,
               it's *this* method that should be overridden by subclasses.
            */
        }

        render() {
            /*
            */
            this.subdom = this.template.render(this.parameters);
            this.attach();
            return this.subdom;
        }
    }

    return Facet;
});
