var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname,
  paths: {
    lib: './lib',
    app: './app',
  },
});

requirejs(['app/main']);
