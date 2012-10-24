# grunt-contrib-compass [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-compass.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-compass)

> Compile Compass to CSS

_Note that this plugin has not yet been released, and only works with the latest bleeding-edge, in-development version of grunt. See the [When will I be able to use in-development feature 'X'?](https://github.com/gruntjs/grunt/blob/devel/docs/faq.md#when-will-i-be-able-to-use-in-development-feature-x) FAQ entry for more information._

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-contrib-compass --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-contrib-compass');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html


## The compass task

This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Compass](http://compass-style.org/install/). If you're on OS X or Linux you probably already have Ruby installed, try `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass.

Compass operates on a folder level, because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options.

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

 * 2012-10-21 - v0.1.0 - Initial release

--
Task submitted by <a href="http://github.com/sindresorhus">Sindre Sorhus</a>.

*Generated on Wed Oct 24 2012 09:42:36.*
