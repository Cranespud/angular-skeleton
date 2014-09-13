'use strict';
require.config({
    baseUrl: './',
    paths: {
        // libs
        text: 'lib/vendor/requirejs-text/text',
        angular: 'lib/vendor/angular/angular',
        jquery: 'lib/vendor/jquery/dist/jquery.min',
        bootstrap: 'lib/vendor/bootstrap/dist/js/bootstrap.min',
        uiBootstrap: 'lib/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
        uiRouter: 'lib/vendor/angular-ui-router/release/angular-ui-router.min',

        // app
        app: 'boot/app',
        appRoutes: 'etc/routes',
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
        jquery: {
            exports: 'jQuery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        uiRouter: {
            deps: ['angular']
        }
    }
});

// bootstrap the app
define(['app', 'angular'], function(app, angular) {
      angular.bootstrap(document, [app.name]);
});