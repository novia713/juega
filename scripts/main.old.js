require.config({
  baseUrl: '/scripts/',
  paths: {
    zepto: '../components/zepto/zepto.min',
    underscore: '../components/underscore/underscore-min',
    backbone: '../components/backbone/backbone-min',
    handlebars: '../components/handlebars.js/dist/handlebars.runtime'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'zepto'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    zepto: {
      exports: '$'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});

require([
  'backbone',
  'router'
], function (Backbone, Router) {
  'use strict';

  new Router();
  Backbone.history.start();
});
