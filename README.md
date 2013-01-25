# grunt-contrib-compass [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-compass.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-compass)

> Compile Compass to CSS

_Note that this plugin has not yet been released, and only works with the latest bleeding-edge, in-development version of grunt. See the [When will I be able to use in-development feature 'X'?](https://github.com/gruntjs/grunt/blob/devel/docs/faq.md#when-will-i-be-able-to-use-in-development-feature-x) FAQ entry for more information._

## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-contrib-compass --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Compass task
_Run this task with the `grunt compass` command._

This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Compass](http://compass-style.org/install/). If you're on OS X or Linux you probably already have Ruby installed, try `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass.

Compass operates on a folder level, because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options.

_This plugin is only compatible with Grunt `>= 0.4.x`._

### Options

Compass doesn't expose all of its [options][config] through the CLI, which this task makes use of. If you need an option not mentioned below you can either specify a path to a config.rb file in the `config` option or embed it directly into the `raw` option. Options defined in your Gruntfile will override those specified in your config.rb or `raw` property. `config` and `raw` are mutually exclusive.

#### config ```string```

Specify the location of the Compass [configuration file][config] explicitly. Defaults to the same path as your Gruntfile.

#### raw ```string```

String form of the Compass [configuration file][config].

#### app ```string```

Tell compass what kind of application it is integrating with. Can be `stand_alone` (default) or `rails`.

#### sassDir ```string```

The source directory where you keep your Sass stylesheets.

#### cssDir ```string```

The target directory where you keep your CSS stylesheets.

#### imagesDir ```string```

The directory where you keep your images.

#### javascriptsDir ```string```

The directory where you keep your JavaScript files.

#### fontsDir ```string```

The directory where you keep your fonts.

#### environment ```string```

Use sensible defaults for your current environment. Can be: `development` (default) or `production`

#### outputStyle ```string```

CSS output mode. Can be: `nested`, `expanded`, `compact`, `compressed`.

#### relativeAssets ```boolean```

Make Compass asset helpers generate relative urls to assets.

#### noLineComments ```boolean```

Disable line comments.

#### require ```string|array```

Require the given Ruby library before running commands. This is used to access Compass plugins without having a project configuration file.

#### load ```string|array```

Load the framework or extensions found in the specified directory.

#### loadAll ```string|array```

Load all the frameworks or extensions found in the specified directory.

#### importPath ```string|array```

Makes files under the specified folder findable by Sass's @import directive.

#### quiet ```boolean```

Quiet mode.

#### trace ```boolean```

Show a full stacktrace on error.

#### force ```boolean```

Allows Compass to overwrite existing files.

#### dryRun ```boolean```

Dry Run. Tells you what it plans to do.

#### boring ```boolean```

Turn off colorized output.


[config]: http://compass-style.org/help/tutorials/configuration-reference/

### Usage Examples

#### Example config

```javascript
grunt.initConfig({
  compass: {                  // Task
    dist: {                   // Target
      options: {              // Target options
        sassDir: 'sass',
        cssDir: 'css',
        environment: 'production'
      }
    },
    dev: {                    // Another target
      options: {
        sassDir: 'sass',
        cssDir: 'css'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-compass');

grunt.registerTask('default', ['jshint', 'compass']);
```


#### Example usage


##### Use external config file

```javascript
grunt.initConfig({
  compass: {
    dist: {
      options: {
        config: 'config/config.rb'
      }
    }
  }
});
```

##### Override setting in external config file

```javascript
grunt.initConfig({
  compass: {
    dist: {
      options: {
        config: 'config/config.rb',  // css_dir = 'dev/css'
        cssDir: 'dist/css'
      }
    }
  }
});
```

##### Use `raw` option

```javascript
grunt.initConfig({
  compass: {
    dist: {
      options: {
        sassDir: 'sass',
        cssDir: 'css',
        raw: 'preferred_syntax = :sass\n' // Use `raw` since it's not directly available
      }
    }
  }
});
```


## Release History

 * 2013-01-24   v0.1.1rc7   Updating grunt/gruntplugin dependencies to rc7. Changing in-development grunt/gruntplugin dependency versions from tilde version ranges to specific versions.
 * 2013-01-09   v0.1.1rc5   Updating to work with grunt v0.4.0rc5.
 * 2012-10-21   v0.1.0   Initial release

---

Task submitted by [Sindre Sorhus](http://github.com/sindresorhus)

*This file was generated on Fri Jan 25 2013 17:26:40.*
