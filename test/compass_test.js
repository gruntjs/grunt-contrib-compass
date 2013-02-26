'use strict';

var grunt = require('grunt');
var compass = require('../tasks/lib/compass').init(grunt);

exports.compass = {
  compile: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile Compass to CSS');

    test.done();
  },
  compileWithConfigFile: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp2/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile with external config file');

    test.done();
  },
  compileWithRaw: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp3/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile with raw content specified');

    test.done();
  },
  bundleExec: function(test) {
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
  basePath: function(test) {
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
  specify: function(test) {

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
  }
};
