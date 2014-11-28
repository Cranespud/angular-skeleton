define(function(require) {
    'use strict';

    var
    module  = require('./module'),
    appRoutes = require('appRoutes');

    require('./controllers/Main');
    require('./services/myservice');

    // register the routes
    module.config(appRoutes);

    // register templates on template cache so we can reference them by name instead of using requirejs
    module.run(function ($templateCache) {
        $templateCache.put('App/navbar.html', require('text!./partials/navbar.html'));
        $templateCache.put('App/home.html'  , require('text!./partials/home.html'));
        $templateCache.put('App/page1.html' , require('text!./partials/page1.html'));
        $templateCache.put('App/page2.html' , require('text!./partials/page2.html'));
    });

    return module;
});