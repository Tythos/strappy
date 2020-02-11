strappy
=======

Rework from intent of original Bootstrap scaffolding for minimal, flexible web
applications. It's awesome! It's super-small! It's AMD-based! It has NO
dependencies! And it now has responsivee layout with navigation menus!

You should try it.

.. contents::

Quick Start
-----------

Copy the contents into the static file folder of your web application. And
that's it! It comes with a number of useful features out-of-the-box, and
requires no more setup than a folder copy. (Though you might want to make sure
you leave out the ".git/" folder.)

CSS
---

This folder contains stylesheets, but we're moving away from plethoras of CSS
files:

* Media queries are now used to handle device layouts, in combination with CSS
  Grid, so separate stylesheets for device classes are no longer needed

* To consolidate code/data dichotemy on the "data" side for interface
  components, we're doing more styling within the Handlebars templates

HBS
---

Rendering parameterized HTML content is handled, by default, through Handlebars
template. Those templates are stored in the "hbs/" folder. Handlebars are a
great alternative to more complex web UI frameworks like React and Angular:

* There are absolutely no dependencies, aside from the nicely-encapsulated
  Handlebars module itself

* Templating syntax is straightforward, with just enough logical operators and
  iterators to be powerful but not enough to impose a learning curve

* .HBS files offer a convenient way to combine HTML DOM and CSS rules (in
  <style/> tags) to aggregate all style/form data in one document, seperate
  from any control and event logic

* Once HBS content is rendered, *querySelector()* (remember the days before
  querySelector()?) makes it straightforward to bind specific event listeners.

* One-to-one pairings of JavaScript modules (with rendering and event/control
  logic) with HBS files (DOM and styling) make a natural and elegant pairing.
  In fact, the latest Strappy release includes a "Facet" model for UI
  components, object-oriented and with their own "on()" event listeners.

JS
--

This folder contains all JavaScript modules (AMD-compatible). These have been
re-organized in recent Strappy releases, so make sure you read the updated
layout/instructions!

lib
```

The "lib/" folder includes several useful external JavaScript libraries:

* *handlebars* is the templating engine; see the "HBS" section for more details

* *hbs-loader* is a RequireJS plugin for facilitating HBS loading and rendering
  straight to DOM, which makes it super-streamlined for load-once templates
  within Facet modules--no matter how many times that module is loaded or used
  (see Facets for more details).

* *require* is the RequireJS module manager, used to bootstrap the entry point,
  expose the main "require()" method, and give modules a way to "define()*"
  themselves.

facets
``````

Facets are user interface components, organized around a Handlebars template
(.HBS) and a JavaScript object that subclasses the Facet base class. Facets are
very easy to develop and use, thanks to super-clean seperation of data and
logic on one hand, and a nicely-streamlined use case for rendering,
subscribing, and attaching on the other. Some Facets included out-of-the-box
(though mainly as examples) include customized Buttons, Tables, and a
Title/Subtitle pair.

main
````

This is the main entry point for the application. Facets can be loaded as
AMD-compatible modules, then instantiated and rendered to the DOM, to populate
the user interface. Layout flexibility is handled by media query style rules in
the "responsive.css" stylesheet.
