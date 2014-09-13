define(['angular', '../module'], function(angular, module) {
    'use strict';

    function InventoryCtrl($scope, $modal) {
        this.scope = $scope;
        this.modalSrv = $modal;
        this.rows = [];
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.itemTypes = [
            {name: 'material', label: 'Materiales'},
            {name: 'part', label: 'Repuestos'}
        ];
        this.filteringByType = this.itemTypes[0].name;

    }

    InventoryCtrl.prototype.init = function() {
        this.getRows();
    };

    InventoryCtrl.prototype.onPageChanged = function() {
    };

    InventoryCtrl.prototype.getRows = function() {
        var
            colors = ['active', 'success', 'warning', 'danger', 'info'],
            type = ['material', 'part', 'part', 'material', 'material'];

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

    InventoryCtrl.prototype.filterByType = function(typeName) {
        this.filteringByType = typeName;
    };

    InventoryCtrl.prototype._openItemModal = function(options) {
        return this.modalSrv.open({
            templateUrl: 'Inventory/' + this.filteringByType + 'ItemModal.html',
            controller: null,
            resolve: {
              item: function () {
                return options.item;
              }
            }
        });
    };

    InventoryCtrl.prototype.addItemModal = function() {
        var modalInstance = this._openItemModal({item: {}});
    };

    InventoryCtrl.prototype.editItemModal = function() {
        var
        selectedItem = this.getSelectedItem() || {};
        modalInstance = this._openItemModal({item: selectedItem});
    };

    InventoryCtrl.prototype.editItemModal = function() {
        var
        selectedItem = this.getSelectedItem() || {};
        modalInstance = this._openItemModal({item: selectedItem});
    };


    return module.controller('InventoryCtrl', ['$scope', '$modal', InventoryCtrl]);
});