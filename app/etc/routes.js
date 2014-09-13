define(function(require) {

    return ['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);


        $urlRouterProvider.otherwise('/error');

        $stateProvider.state('home', {
            url: '/',
            template: require('text!InventoryPkg/partials/ItemTable.html'),
            controller: 'InventoryCtrl as inventoryCtrl'
        });

        $stateProvider.state('inventory', {
            url: '/inventario',
            template: require('text!InventoryPkg/partials/ItemTable.html'),
            controller: 'InventoryCtrl as inventoryCtrl'
        });

        $stateProvider.state('alarms', {
            url: '/alarms',
            template: require('text!InventoryPkg/partials/ItemTable.html'),
            controller: 'InventoryCtrl as inventoryCtrl'
        });

        /*$stateProvider.state('404Error', {
            url: '/error',
            template: require('text!InventoryPkg/partials/partItemModal.html'),
            controller: 'InventoryCtrl as inventoryCtrl'
        });*/
    }];

});