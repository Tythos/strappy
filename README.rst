strappy
=======

Rework from intent of original bootstrap scaffolding for minimal, flexible web
applications. It's awesome! It's super-small! It's AMD-based! It has NO dependencies!

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

This folder contains three stylesheets:

* *common.css* contains styles used across ALL view modes.

* *compact.css* contains styles used when the application detects that a
  compact view mode is required.

* *standard.css* contains styles used when the application detects that a
  compact view mode is NOT required.

Switching between the compact and standard stylesheets is, at present,
determined by window width, including event listeners. You can test it out in
real time by changing the width of your browser window. However, it may also be
useful in the future to add checks for device type meta elements. Especially
since so many mobile devices now adays regularly have 1000+ pixels on their
*smallest* dimension! Future triggers could include:

* Device type inspection

* Orientation

* Pixel pitch / angular resolution

* User interaction mode (larger elements for touch-based)

HBS
---

Rendering parameterized HTML content is handled, by default, through Handlebars
template. Those templates are stored in the "hbs/" folder. Handlebars are a
great alternative to more complex web UI frameworks like React and Angular:

* There are absolutely no dependencies aside from the Handlebars module itself

* Templating syntax is straightforward, with just enough logical operators and
  iterators to be powerful but not enough to impose a learning curve

* .HBS files offer a convenient way to combine HTML DOM and CSS rules (in
  <style/> tags) to aggregate all style/form data in one document, seperate
  from any control and event logic

* Once HBS content is rendered, *querySelector()* (remember the days before
  querySelector()?) makes it straightforward to bind specific event listeners.

* One-to-one pairings of JavaScript modules (with rendering and event/control
  logic) with HBS files (DOM and styling) make a natural and elegant paring

JS
--

This folder contains all JavaScript modules (AMD-compatible), including a few
key built-in files:

* *handlebars* is the templating engine; see the "HBS" section for more details

* *main* defines the entry point, as wrapped in a RequireJS "require()" call

* *quajax* is a basic AJAX module for fetching templates and other files

* *require* is the RequireJS module manager, used to bootstrap the entry point,
  expose the main "require()" method, and give modules a way to "define()*"
  themselves.

* *responsive* defines a method to implement responsive UI behavior. See the
  "CSS" section for more details on response UI logic, which is
  stylesheet-based.
