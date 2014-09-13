define(function(require) {
    'use strict';

    var module = require('./module');

    require('./controllers/Inventory');

    // register templates on template cache so we can reference them by name instead of using requirejs
    module.run(['$templateCache', function($templateCache) {
        $templateCache.put('Inventory/ItemTable.html', require('text!./partials/ItemTable.html'));
        $templateCache.put('Inventory/materialItemModal.html', require('text!./partials/materialItemModal.html'));
        $templateCache.put('Inventory/partItemModal.html', require('text!./partials/partItemModal.html'));
    }]);

    return module;
});