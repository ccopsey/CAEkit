'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    'build-atom-shell': {
      tag: 'v0.26.1',
      nodeVersion: '0.22.0',
      buildDir: (path.env.TMPDIR || path.env.TEMP || '/tmp') + '/atom-shell',
      projectName: 'CAEkit',
      productName: 'CAEkit'
    }
  });

  grunt.loadNpmTasks('grunt-build-atom-shell');

  grunt.registerTask('default', ['build-atom-shell']);
};