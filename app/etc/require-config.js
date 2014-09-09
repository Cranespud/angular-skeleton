'use strict';
require.config({
  baseUrl: './',

   paths: {
       // libs
       app: 'boot/app',
       angular: 'lib/vendor/angular/angular',
       uiBootstrap: 'lib/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
       bootstrap: 'lib/vendor/bootstrap/dist/js/bootstrap.min',
       jquery: 'lib/vendor/jquery/dist/jquery.min',
   },

    packages: [
        {name: 'InventoryPkg', location: 'src/js/Inventory'}
    ],

   shim: {
       angular: {
           exports: 'angular'
       },
       uiBootstrap: {
           deps: ['angular']
       },
       bootstrap: {
           deps: ['jquery']
       },
       jquery: {
           exports: 'jQuery'
       }
   }
});


// bootstrap the app
define(['app', 'angular', 'jquery', 'bootstrap'], function(app) {
    angular.bootstrap(document, [app.name]);
});