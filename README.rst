strappy
=======

Rework from intent of original Bootstrap scaffolding for minimal, flexible web
applications. It's awesome! It's super-small! It's AMD-based! It has NO
dependencies! (Handlebars and RequireJS are built-in.) And, now it has
templating and a responsive layout with navigation menus!

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
  querySelector?) makes it straightforward to bind specific event listeners.

* One-to-one pairings of JavaScript modules (with rendering and event/control
  logic) with HBS files (DOM and styling) make a natural and elegant pairing.
  In fact, a new repository of strappy-compatible UI elements (we're calling
  them "facets") has been developed (see <Tythos/strappy-facets>).

JS
--

This folder contains all JavaScript modules (AMD-compatible). These have been
re-organized in recent Strappy releases, so make sure you read the updated
layout/instructions!

lib
```

The "lib/" folder includes several useful external JavaScript libraries:

* *Animaniac* is a slick little procedural animation library. I think you'll
   like it. Plays well with others--Facets in particular.

* *handlebars* is the templating engine; see the "HBS" section for more details

* *hbs-loader* is a RequireJS plugin to facilitate template loading at the
   module level, particularly for Facets.

* *require* is the RequireJS module manager, used to bootstrap the entry point,
  expose the main "require()" method, and give modules a way to "define()*"
  themselves.

facets
``````

Facets are user interface components, organized around a Handlebars template
(.HBS) and a JavaScript object that subclasses the Facet base class. Facets are
very easy to develop and use, thanks to super-clean seperation of data and
logic on one hand, and a nicely-streamlined use case for rendering,
subscribing, and attaching on the other. One Facet (Button) is included here as
an example, along with a demonstration of how the event listeners can be
combined with the Animaniac animation tool. The GitHub repository
<Tythos/strappy-facets> has a library of reusable Facets for your convenience.

main
````

This is the main entry point for the application. Facets can be loaded as
AMD-compatible modules, then instantiated and rendered to the DOM, to populate
the user interface. Layout flexibility is handled by media query style rules in
the "strappy.css" stylesheet.
