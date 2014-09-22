define(['../module'], function(module) {
    'use strict';

    function MainCtrl($scope) {
        this.name = 'my test';
        this.upperCaseName = '';
    }

    MainCtrl.prototype.toUpperCase = function() {
        this.upperCaseName = this.name.toUpperCase();
    };

    return module.controller('MainCtrl', ['$scope', MainCtrl]);
});