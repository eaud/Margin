/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var tinymceAssets = pickFiles('bower_components/tinymce/', {
  srcDir: '/',
  files: ['**/*.min.js', '**/*.css', '**/*.woff', '**/*.ttf'],
  destDir: '/tinymce'
});

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
        fingerprint: {
          enabled: false

          // prepend: 'https://subdomain.cloudfront.net/'
        }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/tinymce/tinymce.min.js', {destDir: 'assets/tinymce'});
  app.import('bower_components/tinymce/jquery.tinymce.min.js', {destDir: 'assets/tinymce'});
  return app.toTree([tinymceAssets]);
};
