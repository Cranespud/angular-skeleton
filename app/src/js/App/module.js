define([
    'angular',
    'uiBootstrap',
    'uiRouter'
], function(angular) {

    var app = angular.module('myApp', [
        'ui.bootstrap',
        'ui.router'
    ]);

    app.init = function() {
        angular.bootstrap(document, [this.name]);
    };

    return app;
});