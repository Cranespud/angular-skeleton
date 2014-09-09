define(function(require) {
    'use strict';
    
    var module = require('./main');
    module.service('AuthorizationService', ['$location', function($location) {
            var rules = [];

            this.addRule = function(name, routes, callback, redirectTo) {
                rules.push({
                    name: name,
                    routes: routes,
                    callback: callback,
                    redirectTo: redirectTo || ''
                });
            };

            this.matchRule = function(route, rule) {
                if(rule instanceof RegExp) {
                    return rule.test(route);
                } else {
                    return route === rule;
                }
            };

            this.getRule = function(route) {
                var i, j, rule, routesLength, rulesLength = rules.length;

                for(i = 0; i < rulesLength; i++) {
                    routesLength = rules[i].routes.length;
                    for(j = 0; j < routesLength; j++) {
                        if(this.matchRule(route, rules[i].routes[j])) {
                            return rules[i];
                        }
                    }
                }

                return null;
            };

            this.apply = function(route) {
                var rule = this.getRule(route);

                if(rule && rule.redirectTo) {
                    if(!rule.callback()) {
                        $location.path(rule.redirectTo);
                    }
                }
            };
    }]);
});
