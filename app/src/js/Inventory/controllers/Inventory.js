define(['angular', '../module'], function(angular, module) {
    'use strict';

    module.controller('InventoryCtrl', ['$scope', InventoryCtrl]);

    function InventoryCtrl($scope) {
        this.rows = [];
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.scope = $scope;
    };

    InventoryCtrl.prototype.init = function() {
        this.getRows();
    };

    InventoryCtrl.prototype.onPageChanged = function() {
    };

    InventoryCtrl.prototype.getRows = function() {
        var
            colors = ['active', 'success', 'warning', 'danger', 'info'],
            type = ['materiales', 'repuestos', 'repuestos', 'materiales', 'repuestos'];

        for(var i = 0; i < colors.length; i++) {
            this.rows.push({
                type: type[i],
                class: colors[i],
                code: 'cod-' + i,
                description: 'descripcion',
                unitPrice: i*100,
                netPrice: i*100-i*10,
                discount: i*7,
                provider: 'Proveedor' + i
            });
        }
    };
});