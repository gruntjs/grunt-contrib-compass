This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Compass](http://compass-style.org/install/). If you're on OS X or Linux you probably already have Ruby installed, try `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass.

Compass operates on a folder level, because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options.
