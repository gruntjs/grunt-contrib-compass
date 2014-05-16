'use strict';
var fs = require('fs');
var grunt = require('grunt');
var compass = require('../tasks/lib/compass').init(grunt);

exports.compass = {
  compile: function (test) {
    test.expect(1);

    test.ok(/border-color:#3bbfce/.test(grunt.file.read('tmp/compile.css')), 'should compile Sass to CSS using Compass');

    test.done();
  },
  compileWithConfigFile: function (test) {
    test.expect(1);

    test.ok(/border-color:#3bbfce/.test(grunt.file.read('tmp2/compile.css')), 'should compile with external config file');

    test.done();
  },
  compileWithRaw: function (test) {
    test.expect(1);

    test.ok(/border-color:#3bbfce/.test(grunt.file.read('tmp3/compile.css')), 'should compile with raw content specified');

    test.done();
  },
  compileWithBanner: function (test) {
    test.expect(1);

    test.ok(/\/\* grunt\-contrib\-compass banner \*\//.test(grunt.file.read('tmp4/simple.css')), 'should include the banner specified');

    test.done();
  },
  compileCssScssExtensionWithBanner: function (test) {
    test.expect(1);

    test.ok(/\/\* grunt\-contrib\-compass banner \*\//.test(grunt.file.read('tmp5/extension.css')), 'should include the banner specified');

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
      ['compass', 'compile', 'test/fixtures/compile.scss', 'test/fixtures/extension.css.scss'],
      'should return the correct command.');

    test.done();
  },
  extractRawOptions: function (test) {
    var options = {
      unsupportedOption: 'irrellevant',
      imagesPath: '/app/images',
      httpImagesPath: '/path/"with/"quotes'
    };

    var raw = compass.extractRawOptions(options);

    test.expect(3);

    // all but the unsupported options are removed.
    test.equal(Object.keys(options).length, 1);
    test.equal(raw.raw, 'images_path = "/app/images"\nhttp_images_path = "/path/\\"with/\\"quotes"\n');
    test.deepEqual(raw.options, ['imagesPath', 'httpImagesPath']);
    test.done();
  },
  spriteLoadPath: function (test) {
    var options = {
      spriteLoadPath: '/path/"with/quotes'
    };

    var raw = compass.extractRawOptions(options);

    test.expect(1);

    // all but the unsupported options are removed.
    test.equal(raw.raw, 'sprite_load_path << "/path/\\"with/quotes"\n');
    test.done();
  },
  spriteLoadPathTest: function (test) {
    var options = {
      spriteLoadPath: [
        '/path/"with/multiple"quotes',
        '/secondPath'
      ]
    };

    var raw = compass.extractRawOptions(options);

    test.expect(1);

    // all but the unsupported options are removed.
    test.equal(raw.raw, 'sprite_load_path << "/path/\\"with/multiple\\"quotes"\nsprite_load_path << "/secondPath"\n');
    test.done();
  },
  disableCacheBuster: function (test) {
    var options = {
      assetCacheBuster: false
    };

    var raw = compass.extractRawOptions(options);

    test.expect(3);

    test.equal(Object.keys(options).length, 0);
    test.equal(raw.raw, 'asset_cache_buster :none\n');
    test.deepEqual(raw.options, ['assetCacheBuster']);
    test.done();
  },
  enableCacheBuster: function (test) {
    var options = {
      assetCacheBuster: true
    };

    var raw = compass.extractRawOptions(options);

    test.expect(2);

    test.equal(Object.keys(options).length, 0);
    // There is no configuration generated for the case that we keep the cache
    // buster enabled.
    test.equal(raw.raw, '');
    test.done();
  },
  clean: function (test) {
    test.expect(1);
    test.equal(fs.existsSync('../.sass-cache'), false);
    test.done();
  }
};
