# Options

Compass doesn't expose all of its [options][config] through the CLI, which this task makes use of. If you need an option not mentioned below you can either specify a path to a config.rb file in the `config` option or embed it directly into the `raw` option. Options defined in your Gruntfile will override those specified in your config.rb or `raw` property. `config` and `raw` are mutually exclusive.

## config

Type: `String`  
Default: same path as your Gruntfile

Specify the location of the Compass [configuration file][config] explicitly.

## raw

Type: `String`

String form of the Compass [configuration file][config].

## basePath

Type: `String`

The the path Compass will run from. Defaults to the same path as your Gruntfile.

## banner

Type: `String`

Prepend the specified string to the output file. Useful for licensing
information. **Note:** This only works in combination with the `specify` option
and can conflict with sourcemap generation.

## app

Type: `String`  
Default: `stand_alone`

Tell compass what kind of application it is integrating with. Can be `stand_alone` or `rails`.

## binPath

Type: `String|Array`
Default: `compass (compass.bat in win)`

Defines full path to compass commpass command.
In case binPath is array, all items with index > 0
are treated as addisional arguments passed to command 
(zero-indexed value).

## sassDir

Type: `String`

The source directory where you keep your Sass stylesheets.

## cssDir

Type: `String`

The target directory where you keep your CSS stylesheets.

## specify

Type: `String|Array`

Lets you specify which files you want to compile. Useful if you don't want to compile the whole folder. Globbing supported. Ignores filenames starting with underscore. Files must be in the directory you specified in `sassDir`.

## imagesDir

Type: `String`

The directory where you keep your images.

## javascriptsDir

Type: `String`

The directory where you keep your JavaScript files.

## fontsDir

Type: `String`

The directory where you keep your fonts.

## environment

Type: `String`  
Default: `development`

Use sensible defaults for your current environment. Can be: `development` or `production`

## outputStyle

Type: `String`

CSS output mode. Can be: `nested`, `expanded`, `compact`, `compressed`.

## relativeAssets

Type: `Boolean`

Make Compass asset helpers generate relative urls to assets.

## noLineComments

Type: `Boolean`

Disable line comments.

## httpPath

Type: `String`  
Default: `/`

The path to the project when running within the web server.

## cssPath

Type: `String`

The directory where the css stylesheets are kept. It is relative to the `projectPath`. Defaults to "stylesheets".

## httpStylesheetsPath

Type: `String`  
Default: `httpPath + "/" + cssDir`

The full http path to stylesheets on the web server.

## sassPath

Type: `String`  
Default: `sass`

The directory where the sass stylesheets are kept. It is relative to the `projectPath`.

## imagesPath

Type: `String`  
Default: `images`

The directory where the images are kept. It is relative to the projectPath.

## httpImagesPath

Type: `String`  
Default: `httpPath + "/" + imagesDir`

The full http path to images on the web server.

## generatedImagesDir

Type: `String`  
Default: value of `imagesDir`

The directory where generated images are kept. It is relative to the `projectPath`.

## generatedImagesPath

Type: `String`  
Default: value of `projectPath/generatedImagesDir`

The full path to where generated images are kept.

## httpGeneratedImagesPath

Type: `String`  
Default: `httpPath + "/" + generatedImagesDir`

The full http path to generated images on the web server.

## javascriptsPath

Type: `String`  
Default: `projectPath/javascriptsDir`

The full path to where javascripts are kept.

## httpJavascriptsPath

Type: `String`  
Default: `httpPath + "/" + javascriptsDir`

The full http path to javascripts on the web server.

## fontsPath

Type: `String`  
Default: `projectPath/fontsDir`

The full path to where font files are kept.

## httpFontsPath

Type: `String`

The full http path to font files on the web server.

## httpFontsDir

Type: `String`

The relative http path to font files on the web server.

## extensionsPath

Type: `String`  
Default: `project_root/extensions`

The full http path to the ad-hoc extensions folder on the web server. This is used to access compass plugins that have been installed directly to the project (e.g. through [Bower](https://github.com/bower/bower)) instead of globally as gems. *Only Compass >=0.12.2*

## extensionsDir

Type: `String`

The relative http path to the ad-hoc extensions folder on the web server. *Only Compass >=0.12.2*

## assetCacheBuster

Type: `Boolean`  
Default: `true`

If set to `false`, this disables the default asset cache buster.

## require

Type: `String|Array`

Require the given Ruby library before running commands. This is used to access Compass plugins without having a project configuration file.

## load

Type: `String|Array`

Load the framework or extensions found in the specified directory.

## loadAll

Type: `String|Array`

Load all the frameworks or extensions found in the specified directory.

## importPath

Type: `String|Array`

Makes files under the specified folder findable by Sass's @import directive.

## debugInfo

Type: `Boolean`

Causes the line number and file where a selector is defined to be emitted into the compiled CSS in a format that can be understood by the browser. Automatically disabled when using `outputStyle: 'compressed'`.

## quiet

Type: `Boolean`

Quiet mode.

## trace

Type: `Boolean`

Show a full stacktrace on error.

## force

Type: `Boolean`

Allows Compass to overwrite existing files.

## dryRun

Type: `Boolean`

Dry Run. Tells you what it plans to do.

## boring

Type: `Boolean`

Turn off colorized output.

## bundleExec

Type: `Boolean`

Run `compass compile` with [bundle exec](http://gembundler.com/v1.3/man/bundle-exec.1.html): `bundle exec compass compile`.

## clean

Type: `Boolean`

Remove generated files and the sass cache. Runs `compass clean` instead of `compass compile`.

## watch

Type: `Boolean`

Runs `compass watch` instead of `compass compile`. This will use Compass' native watch command to listen for changes to Sass files and recompile your CSS on changes. While much faster than running `compass compile` each time you want to compile your Sass, Compass becomes a blocking task. This means that if you would like to use it in conjunction with another blocking task, such as `watch`, you will need to use it in conjunction with a paralleling task such as [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent).


[config]: http://compass-style.org/help/tutorials/configuration-reference/
