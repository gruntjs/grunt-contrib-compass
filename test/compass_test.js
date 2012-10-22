var grunt = require('grunt');

exports.compass = {
  compile: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile Compass to CSS');

    test.done();
  },
  compileWithConfigFile: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp2/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile with external config file');

    test.done();
  },
  compileWithRaw: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp3/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile with raw content specified');

    test.done();
  }
};
