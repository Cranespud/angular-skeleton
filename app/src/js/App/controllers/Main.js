define(['../module'], function(module) {
    'use strict';

    return module.controller('MainCtrl', function($scope) {
        this.name = 'my test';
        this.upperCaseName = '';
        this.toUpperCase = function() {
            this.upperCaseName = this.name.toUpperCase();
        };
    });
});