Chopstick Boilerplate
=====================

Chopstick Boilerplate is a mobile-first responsive Design Boilerplate using the Chopstick framework.

- [Visit website](http://getchopstick.com/)

It uses the following tools
- [Bower](http://bower.io/) as a dependency manager
- [Sass](http://sass-lang.com/) as a scss preprocessor
- [Jekyll](http://jekyllrb.com/) as a static site generator
- [Gulp](http://gulpjs.com/) as a build system


## Setup and usage

### Requirements

1. [Ruby](https://www.ruby-lang.org) and [rubygems](https://rubygems.org)
2. [Node 4.4.4](http://nodejs.org) and [npm 2.15.1](https://npmjs.org) or [NVM](https://github.com/creationix/nvm)

### Install

First, `cd` into the project root (where this file is).
Install [bundler](http://bundler.io) and the necessary Ruby dependencies:

    gem update --system && gem install bundler
    bundle install

Install [bower](http://bower.io) and the necessary JavaScript dependencies:

    npm install -g bower
    bower install

Install [gulp](http://gulpjs.com/) and the necessary gulp dependencies:

    npm install -g gulp
    npm install

Project specific code should be written in the components layer.

## Use

We use Gulp as our task runner. There are some basic tasks defined but these can be easily extended by changing the `gulpfile.js`.

To compile Chopstick Boilerplate, `cd` into the project root and run:

    gulp

This will compile the `scss` and build the Jekyll site.

For development there is also a watch task wich will load a browsersync server and watch your all your files (`*.html, *.md, *.scss, *.js, *.jpg, *.png, *.svg`) for changes:

    gulp watch

Browsersync also works as a server for your devices. More info can be found on the [browsersync site](http://www.browsersync.io/).
