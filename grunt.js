/*
 * grunt-contrib-compass
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: [
        'grunt.js',
        'tasks/*.js',
        '<config:nodeunit.tasks>'
      ]
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: [
        'tmp',
        'tmp2',
        'tmp3',
        '.sass-cache'
      ]
    },

    // Configuration to be run (and then tested).
    compass: {
      compile: {
        options: {
          sassDir: 'test/fixtures',
          cssDir: 'tmp'
        }
      },
      compileWithConfigFile: {
        options: {
          config: 'test/config.rb'
        }
      },
      compileWithRaw: {
        options: {
          raw: 'sass_dir = "test/fixtures"\ncss_dir = "tmp3"'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tasks: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // The clean plugin helps in testing.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.renameTask('test', 'nodeunit');
  grunt.registerTask('test', 'clean mkdir:tmp mkdir:tmp2 mkdir:tmp3 compass nodeunit clean');

  // By default, lint and run all tests.
  grunt.registerTask('default', 'lint test');

  grunt.registerTask('mkdir', function(dir) {
    require('fs').mkdirSync(dir);
  });
};
