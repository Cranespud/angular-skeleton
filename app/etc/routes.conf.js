define(['require', 'appConf'], function (require, appConf) {
    'use strict';

    return ['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise(appConf.baseUrl + '/error');

            $stateProvider.state('home', {
                url: appConf.baseUrl + '/',
                templateUrl: 'App/home.html',
                controller: 'MainCtrl as mainCtrl'
            });

            $stateProvider.state('home2', {
                url: appConf.baseUrl + '',
                templateUrl: 'App/home.html',
                controller: 'MainCtrl as mainCtrl'
            });

            $stateProvider.state('page1', {
                url: appConf.baseUrl + '/page1',
                templateUrl: 'App/page1.html',
                controller: 'MainCtrl as mainCtrl'
            });

            $stateProvider.state('page2', {
                url: appConf.baseUrl + '/page2',
                templateUrl: 'App/page2.html',
                controller: 'MainCtrl as mainCtrl'
            });
    }];
});