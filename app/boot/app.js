define([
    'angular',
    'InventoryPkg',
    'uiBootstrap'
], function(angular, InventoryPkg) {

    var
        app = angular.module('tecnomotriz.si', [
        'ui.bootstrap',
        InventoryPkg.name
    ]);
    return app;
});