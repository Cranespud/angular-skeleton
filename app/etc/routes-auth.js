define(function(require) {
    'use strict';
    
    var module = require('./services/main');
    module.run(['AuthenticationService2', 'AuthorizationService', function(authentication, authorization) {
        // authorization.addRule(name, [route or regexp], callback, redirectTo)
        // callback should return true if the route can be accessed

        authorization.addRule('publicPages', ['/login', '/', /\/register*/, '/reset', /\/insights\/widget*/], function() {
            return !authentication.isSessionValid();
        }, '/dashboard');

        authorization.addRule('privatePages', ['/dashboard', /\/insights*/, '/about', /\/account*/], function() {
            return authentication.isSessionValid();
        }, '/dashboard');

    }]);
});