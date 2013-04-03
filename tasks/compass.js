/*
 * grunt-contrib-compass
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var compass = require('./lib/compass').init(grunt);
  var fs = require('fs');
  var tmp = require('tmp');

  function compile(args, cb) {
    var child = grunt.util.spawn({
      cmd: args.shift(),
      args: args
    }, function (err, result, code) {
      var success = code === 0;

      if (code === 127) {
        return grunt.warn(
          'You need to have Ruby and Compass installed ' +
          'and in your system PATH for this task to work. ' +
          'More info: https://github.com/gruntjs/grunt-contrib-compass'
        );
      }

      // `compass compile` exits with 1 and outputs "Nothing to compile"
      // on stderr when it has nothing to compile.
      // https://github.com/chriseppstein/compass/issues/993
      // Don't fail the task in this situation.
      if (code === 1 && /Nothing to compile/g.test(result.stderr)) {
        success = true;
      }

      cb(success);
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }

  grunt.registerMultiTask('compass', 'Compile Compass to CSS', function () {
    var options = this.options();
    var cb = this.async();
    var raw = options.raw;
    // get the array of arguments for the compass command
    var args = compass.buildArgsArray(options);

    if (raw) {
      tmp.file(function (err, path, fd) {
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
