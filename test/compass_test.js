'use strict';
var fs = require('fs');
var grunt = require('grunt');
var compass = require('../tasks/lib/compass').init(grunt);

exports.compass = {
  compile: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile Sass to CSS using Compass');

    test.done();
  },
  compileWithConfigFile: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp2/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile with external config file');

    test.done();
  },
  compileWithRaw: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp3/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile with raw content specified');

    test.done();
  },
  bundleExec: function (test) {
    var dataSet;

    test.expect(1);

    // Options object
    dataSet = {
      bundleExec: true
    };

    test.deepEqual(compass.buildArgsArray(dataSet),
      ['bundle', 'exec', 'compass', 'compile'],
      'should return the correct command.');

    test.done();
  },
  basePath: function (test) {
    var dataSet;

    test.expect(1);

    // Options object
    dataSet = {
      basePath: 'myproject'
    };

    test.deepEqual(compass.buildArgsArray(dataSet),
      ['compass', 'compile', 'myproject'],
      'should return the correct command.');

    test.done();
  },
  specify: function (test) {

    var dataSet;

    test.expect(1);

    // Options object
    dataSet = {
      specify: 'test/**/*.scss'
    };

    test.deepEqual(compass.buildArgsArray(dataSet),
      ['compass', 'compile', 'test/fixtures/compile.scss'],
      'should return the correct command.');

    test.done();
  },
  extractRawOptions: function (test) {
    var options = {
      unsupportedOption: 'irrellevant',
      imagesPath: '/app/images',
      httpImagesPath: '/path/"with/quotes'
    };

    var raw = compass.extractRawOptions(options);

    test.expect(3);

    // all but the unsupported options are removed.
    test.equal(Object.keys(options).length, 1);
    test.equal(raw.raw, 'images_path = "/app/images"\nhttp_images_path = "/path/\\"with/quotes"\n');
    test.deepEqual(raw.options, ['imagesPath', 'httpImagesPath']);
    test.done();
  },
  clean: function (test) {
    test.expect(1);
    test.equal(fs.existsSync('../.sass-cache'), false);
    test.done();
  }
};
