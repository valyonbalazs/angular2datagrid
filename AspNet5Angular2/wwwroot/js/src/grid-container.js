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
var GridContainer = (function () {
    function GridContainer() {
        this.isPaginationEnabled = grid_configuration_1.GridConfig.GetIsPaginationEnabled();
        this.rows = data_container_1.DataContainer.getRows();
        this.columns = data_container_1.DataContainer.getColumns();
        // this.ProcessGridConfiguration();
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
    GridContainer.prototype.ProcessGridConfiguration = function () {
        this.isPaginationEnabled = grid_configuration_1.GridConfig.GetIsPaginationEnabled();
        console.log(this.isPaginationEnabled);
    };
    GridContainer.prototype.ngOnInit = function () {
        console.log("\nletrejott GRIDCONTAINER");
    };
    GridContainer = __decorate([
        core_1.Component({
            selector: 'grid-container',
            directives: [grid_1.Grid, pagination_1.Pagination],
            templateUrl: '../html/grid-container.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GridContainer);
    return GridContainer;
})();
exports.GridContainer = GridContainer;
//# sourceMappingURL=grid-container.js.map