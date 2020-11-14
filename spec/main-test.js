var requirejs = require('requirejs');
var glob = require('glob');

requirejs.config({
  baseUrl: './src',
  paths: {
    test: '../spec/',
    lib: './lib',
    app: './app',
  },
});

var files = glob.sync('./spec/**/*spec.js');

files.forEach(function (file) {
  requirejs(file);
});
