define([
    'angular',
    'appRoutes',
    'InventoryPkg',
    'uiBootstrap',
    'uiRouter'
], function(angular, appRoutes, InventoryPkg) {

    var
    app = angular.module('tecnomotriz.si', [
        'ui.bootstrap',
        'ui.router',
        InventoryPkg.name
    ])
    .config(appRoutes);

    return app;
});