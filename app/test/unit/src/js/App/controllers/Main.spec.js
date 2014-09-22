define(function(require) {
    'use strict';

    require('ngMocks');
    require('AppPkg/controllers/Main');
    describe('MainController tests', function() {
        var ctrl;

        beforeEach(module('myApp'));

        beforeEach(inject(function($controller, $rootScope) {
            ctrl = $controller('MainCtrl', {$scope: $rootScope.$new()});
        }));

        it('Angular should be availble', function() {
            expect(ctrl.name).toBe('my test');
        });
    });
});