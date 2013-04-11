[Compass](http://compass-style.org/) is an open-source authoring framework for the [Sass](http://sass-lang.com/) css preprocessor. It helps you build stylesheets faster with a huge library of Sass mixins and functions, advanced tools for spriting, and workflow improvements including file based Sass configuration and a simple pattern for building and using Compass extensions.

This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/), [Sass](http://sass-lang.com/tutorial.html), and [Compass](http://compass-style.org/install/) >=0.12.2 installed. If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass and Sass.

Compass operates on a folder level. Because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options.
