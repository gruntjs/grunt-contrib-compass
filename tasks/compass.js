/*
 * grunt-contrib-compass
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var fs = require('fs');
  var tmp = require('tmp');

  function compile(args, cb) {
    var child = grunt.util.spawn({
      cmd: process.platform === 'win32' ? 'compass.bat' : 'compass',
      args: args
    }, function(err, result, code) {
      if (code === 127) {
        return grunt.warn(
          'You need to have Ruby and Compass installed ' +
          'and in your system PATH for this task to work. ' +
          'More info: https://github.com/gruntjs/grunt-contrib-compass'
        );
      }
      // `compass compile` exits with 1 when it has nothing to compile
      // https://github.com/chriseppstein/compass/issues/993
      cb((code === 0 || !/Nothing to compile/g.test(result.stdout)) || result.stderr);
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }

  grunt.registerMultiTask('compass', 'Compile Compass to CSS', function() {
    var args;
    var helpers = require('grunt-lib-contrib').init(grunt);
    var options = this.options();
    var cb = this.async();
    var raw = options.raw;

    // Don't want this as CLI flag
    delete options.raw;

    args = ['compile'].concat(helpers.optsToArgs(options));

    grunt.verbose.writeflags(options, 'Options');

    if (raw && options.config) {
      grunt.fail.fatal('The options `raw` and `config` are mutually exclusive');
    }

    // Compass doesn't have a long flag for this option:
    // https://github.com/chriseppstein/compass/issues/1055
    if (options.importPath) {
      args = args.map(function(el) {
        return el.replace('--import-path', '-I');
      });
    }

    if (raw) {
      tmp.file(function(err, path, fd) {
        if (err) {
          grunt.fail.fatal(err);
        }

        // Dynamically create config.rb as a tmp file for the `raw` content
        fs.writeSync(fd, new Buffer(raw), 0, raw.length);

        args.push('--config', path);
        compile(args, cb);
      });
    } else {
      compile(args, cb);
    }
  });
};
