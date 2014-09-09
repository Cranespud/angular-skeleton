define(function(require) {
    'use strict';

    var
        module = require('./main'),
        moment = require('moment');

    module.service('AuthenticationService2',
    ['storage', '$http', '$location', '$window',
    function(storage, $http, $location, $window) {

        var user;

        this.init = function() {
            this.initLocalStorage();
            this.initSession();
        };

        this.initLocalStorage = function() {
            storage.bind(user, 'email', {"defaultValue": ""});
            storage.bind(user, 'token', {"defaultValue": ""});
        };

        this.isSessionValid = function() {
            return true;
        };

        /**
         * This function should be called on page refresh
         */
        this.initSession = function() {
        };

        this.userAuthenticationSucceeded = function() {
            $http.defaults.headers.common.Authorization = user.token;
        };

        this.login = function(email, password) {
            var
                self = this,
                loginPromise;

            loginPromise = $http.post('/login', {email: email, password: password });
            loginPromise.then(function(response) {
                  user.email = response.data.email;
                  user.token = response.data.token;
                  self.userAuthenticationSucceeded();
                });

            return loginPromise;
        };

        this.serverCommunicationError = function() {
            $window.alert('Cannot contact servers. Please try again later.');

            $location.path('/');
            this.invalidateSession();
        };

        this.invalidateSession = function() {
            console.log('cleaning up');
        };

        this.getUser = function() {
        };
    }]);
});