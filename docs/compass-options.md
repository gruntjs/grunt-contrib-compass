# Options

Compass doesn't expose all of its [options][config] through the CLI, which this task makes use of. If you need an option not mentioned below you can either specify a path to a config.rb file in the `config` option or embed it directly into the `raw` option. Options defined in your Gruntfile will override those specified in your config.rb or `raw` property. `config` and `raw` are mutually exclusive.

## config ```string```

Specify the location of the Compass [configuration file][config] explicitly. Defaults to the same path as your Gruntfile.

## raw ```string```

String form of the Compass [configuration file][config].

## app ```string```

Tell compass what kind of application it is integrating with. Can be `stand_alone` (default) or `rails`.

## sassDir ```string```

The source directory where you keep your Sass stylesheets.

## cssDir ```string```

The target directory where you keep your CSS stylesheets.

## imagesDir ```string```

The directory where you keep your images.

## javascriptsDir ```string```

The directory where you keep your JavaScript files.

## fontsDir ```string```

The directory where you keep your fonts.

## environment ```string```

Use sensible defaults for your current environment. Can be: `development` (default) or `production`

## outputStyle ```string```

CSS output mode. Can be: `nested`, `expanded`, `compact`, `compressed`.

## relativeAssets ```boolean```

Make Compass asset helpers generate relative urls to assets.

## noLineComments ```boolean```

Disable line comments.

## require ```string|array```

Require the given Ruby library before running commands. This is used to access Compass plugins without having a project configuration file.

## load ```string|array```

Load the framework or extensions found in the specified directory.

## loadAll ```string|array```

Load all the frameworks or extensions found in the specified directory.

## importPath ```string|array```

Makes files under the specified folder findable by Sass's @import directive.

## quiet ```boolean```

Quiet mode.

## trace ```boolean```

Show a full stacktrace on error.

## force ```boolean```

Allows Compass to overwrite existing files.

## dryRun ```boolean```

Dry Run. Tells you what it plans to do.

## boring ```boolean```

Turn off colorized output.


[config]: http://compass-style.org/help/tutorials/configuration-reference/
