"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var grid_1 = require('./grid');
var pagination_1 = require('./pagination');
var data_container_1 = require('./data-container');
var filter_global_1 = require('./filter-global');
var filter_column_1 = require('./filter-column');
var GridConfigurator = (function () {
    function GridConfigurator() {
        this.rows = data_container_1.DataContainer.getRows();
        this.columns = data_container_1.DataContainer.getColumns();
        this.LoadAndSetGridSettings();
    }
    GridConfigurator.prototype.ngOnInit = function () {
        console.log("\nletrejott GRIDCONFIGURATOR");
    };
    GridConfigurator.prototype.getRows = function () {
        return this.rows;
    };
    GridConfigurator.prototype.getColumns = function () {
        return this.columns;
    };
    GridConfigurator.prototype.GetIsPaginationEnabled = function () {
        // return this.isPaginationEnabled == "true" ? true : false;
        return this.isPaginationEnabled;
    };
    GridConfigurator.prototype.GetIsFilterGlobalEnabled = function () {
        //return this.isFilterGlobalEnabled == "true" ? true : false;
        return this.isFilterGlobalEnabled;
    };
    GridConfigurator.prototype.GetIsFilterColumnEnabled = function () {
        // return this.isFilterColumnEnabled == "true" ? true : false;
        return this.isFilterColumnEnabled;
    };
    GridConfigurator.prototype.LoadAndSetGridSettings = function () {
        this.SetGridTableHeight();
    };
    GridConfigurator.prototype.SetGridTableHeight = function () {
        $("gridTable tbody").css("height", this.gridTableHeight + "vh");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridConfigurator.prototype, "name", void 0);
    __decorate([
        core_1.Input("pagination"), 
        __metadata('design:type', Boolean)
    ], GridConfigurator.prototype, "isPaginationEnabled", void 0);
    __decorate([
        core_1.Input("filtercolumn"), 
        __metadata('design:type', Boolean)
    ], GridConfigurator.prototype, "isFilterColumnEnabled", void 0);
    __decorate([
        core_1.Input("filterglobal"), 
        __metadata('design:type', Boolean)
    ], GridConfigurator.prototype, "isFilterGlobalEnabled", void 0);
    __decorate([
        core_1.Input("tableheight"), 
        __metadata('design:type', Number)
    ], GridConfigurator.prototype, "gridTableHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GridConfigurator.prototype, "editable", void 0);
    __decorate([
        core_1.Input("numberofrows"), 
        __metadata('design:type', Number)
    ], GridConfigurator.prototype, "numberOfRows", void 0);
    GridConfigurator = __decorate([
        core_1.Component({
            selector: 'grid-configurator',
            directives: [grid_1.Grid, pagination_1.Pagination, filter_global_1.FilterGlobal, filter_column_1.FilterColumn],
            templateUrl: '../html/grid-configurator.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GridConfigurator);
    return GridConfigurator;
}());
exports.GridConfigurator = GridConfigurator;
//# sourceMappingURL=grid-configurator.js.map