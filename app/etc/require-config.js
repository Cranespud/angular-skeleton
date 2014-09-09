require.config({
  baseUrl: './',

   paths: {
       app: 'boot/app',
       angular: 'lib/vendor/angular/angular.min',
       uiBootstrap: 'lib/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
       testme: 'app/src/js/testme'
   },

   shim: {
       angular: {
           exports: 'angular'
       },
       uiBootstrap: {
           deps: ['angular']
       }
   }
});


// bootstrap the app
define(['app'], function(angular, app) {

});