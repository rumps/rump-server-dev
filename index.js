'use strict';

var rump = module.exports = require('rump');
var configs = require('./configs');
var originalAddGulpTasks = rump.addGulpTasks;

rump.addGulpTasks = function(options) {
  originalAddGulpTasks(options);
  require('./gulp');
  return rump;
};

rump.on('update:main', function() {
  configs.rebuild();
  rump.emit('update:server:dev');
});

Object.defineProperty(rump.configs, 'browserSync', {
  get: function() {
    return configs.browserSync;
  }
});