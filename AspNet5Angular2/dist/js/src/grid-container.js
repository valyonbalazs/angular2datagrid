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
var grid_configuration_1 = require('./grid-configuration');
var filter_global_1 = require('./filter-global');
var filter_column_1 = require('./filter-column');
var GridContainer = (function () {
    function GridContainer() {
        this.isPaginationEnabled = grid_configuration_1.GridConfig.GetIsPaginationEnabled();
        this.isFilterColumnEnabled = grid_configuration_1.GridConfig.GetIsFilterColumnEnabled();
        this.isFilterGlobalEnabled = grid_configuration_1.GridConfig.GetIsFilterGlobalEnabled();
        this.gridTableHeight = grid_configuration_1.GridConfig.GetGridTableHeight();
        this.rows = data_container_1.DataContainer.getRows();
        this.columns = data_container_1.DataContainer.getColumns();
        this.LoadAndSetGridSettings();
    }
    GridContainer.prototype.getRows = function () {
        return this.rows;
    };
    GridContainer.prototype.getColumns = function () {
        return this.columns;
    };
    GridContainer.prototype.GetIsPaginationEnabled = function () {
        return this.isPaginationEnabled;
    };
    GridContainer.prototype.GetIsFilterGlobalEnabled = function () {
        return this.isFilterGlobalEnabled;
    };
    GridContainer.prototype.GetIsFilterColumnEnabled = function () {
        return this.isFilterColumnEnabled;
    };
    GridContainer.prototype.LoadAndSetGridSettings = function () {
        this.SetGridTableHeight();
    };
    GridContainer.prototype.SetGridTableHeight = function () {
        $("gridTable tbody").css("height", this.gridTableHeight + "vh");
    };
    GridContainer.prototype.ngOnInit = function () {
        console.log("\nletrejott GRIDCONTAINER");
    };
    GridContainer = __decorate([
        core_1.Component({
            selector: 'grid-container',
            directives: [grid_1.Grid, pagination_1.Pagination, filter_global_1.FilterGlobal, filter_column_1.FilterColumn],
            templateUrl: '../html/grid-container.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GridContainer);
    return GridContainer;
})();
exports.GridContainer = GridContainer;
//# sourceMappingURL=grid-container.js.map