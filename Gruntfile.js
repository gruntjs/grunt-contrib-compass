/*
 * grunt-contrib-compass
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: {
      name: 'grunt-contrib-compass'
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: [
        'tmp',
        'tmp2',
        'tmp3',
        'tmp4',
        'tmp5',
        '.sass-cache'
      ]
    },

    // Configuration to be run (and then tested).
    compass: {
      compile: {
        options: {
          sassDir: 'test/fixtures',
          cssDir: 'tmp',
          specify: 'test/fixtures/*.scss'
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
      },
      compileNothing: {
        options: {
          sassDir: 'test/doesnt-exist',
        }
      },
      compileWithBanner: {
        options: {
          sassDir: 'test/fixtures',
          cssDir: 'tmp4',
          specify: 'test/fixtures/simple.sass',
          banner: '/* <%= pkg.name %> banner */'
        }
      },
      compileCssScssExtensionWithBanner: {
        options: {
          sassDir: 'test/fixtures',
          cssDir: 'tmp5',
          specify: 'test/fixtures/extension.css.scss',
          banner: '/* <%= pkg.name %> banner */'
        }
      },
      issue232: {
        options: {
          raw: 'Sass::Script::Number.precision = 10\n',
          sassDir: 'test/fixtures',
          cssDir: 'tmp6',
          specify: 'test/fixtures/extension.css.scss',
          banner: '/* <%= pkg.name %> banner */'
        }
      },
      clean: {
        options: {
          clean: true
        }
      },
      options: {
        outputStyle: 'compressed'
      }
    },

    shell: {
      posixlyCorrect: {
        command: 'POSIXLY_CORRECT=1 grunt compass:compile'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('mkdir', grunt.file.mkdir);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'jshint',
    'clean',
    'mkdir:tmp',
    'mkdir:tmp2',
    'mkdir:tmp3',
    'shell:posixlyCorrect',
    'compass',
    'nodeunit',
    'clean'
  ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test', 'build-contrib']);
};
