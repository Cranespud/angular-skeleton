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
        lodash: 'lib/vendor/lodash/dist/lodash.min',

        // app
        appConf: 'etc/app.conf',
        appRoutes: 'etc/routes'
    },

    packages: [
        {name: 'AppPkg', location: 'src/js/App'}
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
        },
        lodash: {
            exports: '_'
        }
    }
});

require(['AppPkg'], function(app) {
    app.init();
});