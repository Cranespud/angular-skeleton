define(['require', 'appConf'], function () {
    'use strict';

    return ['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/error');

            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'App/home.html',
                controller: 'MainCtrl as mainCtrl'
            });

            $stateProvider.state('home2', {
                url: '',
                templateUrl: 'App/home.html',
                controller: 'MainCtrl as mainCtrl'
            });

            $stateProvider.state('page1', {
                url: '/page1',
                templateUrl: 'App/page1.html',
                controller: 'MainCtrl as mainCtrl'
            });

            $stateProvider.state('page2', {
                url: '/page2',
                templateUrl: 'App/page2.html',
                controller: 'MainCtrl as mainCtrl'
            });
    }];
});