# grunt-contrib-compass [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-compass.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-compass)

> Compile Compass to CSS


### Overview

This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Compass](http://compass-style.org/install/). If you're on OS X or Linux you probably already have Ruby installed, try `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass.


## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-contrib-compass`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-contrib-compass');
```

[grunt]: https://github.com/gruntjs/grunt
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md


## Documentation

Compass operates on a folder level, because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options.


### Example config

```javascript
grunt.initConfig({
	compass: {									// Task
		dist: {									// Target
			options: {							// Target options
				sassDir: 'sass',
				cssDir: 'css',
				environment: 'production'
			}
		},
		dev: {									// Another target
			options: {
				sassDir: 'sass',
				cssDir: 'css'
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-compass');

grunt.registerTask('default', 'lint compass');
```


### Example usage


#### Use external config file

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

#### Override setting in external config file

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

#### Use `raw` option

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


### Parameters

#### options ```object```

This controls how this task (and its helpers) operate and should contain key:value pairs, see options below.


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

--

*Task submitted by [Sindre Sorhus](/sindresorhus).*


[config]: http://compass-style.org/help/tutorials/configuration-reference/
