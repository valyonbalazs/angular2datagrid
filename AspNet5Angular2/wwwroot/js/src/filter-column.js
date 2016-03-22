/// <reference path="typings/jquery/jquery.d.ts" /> 
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
var data_container_1 = require('./data-container');
var FilterColumn = (function () {
    function FilterColumn() {
        this.numberOfColumns = 0;
        this.selectedFilterSelectOption = null;
        this.Initializer();
    }
    FilterColumn.prototype.ngOnInit = function () {
        console.log("\nletrejott FILTER-COLUMN");
    };
    FilterColumn.prototype.Initializer = function () {
        this.selectOptionsArray = new Array();
        this.columns = data_container_1.DataContainer.getColumns();
        this.numberOfColumns = this.columns.length;
        this.GetSelectOptionsForMap();
    };
    FilterColumn.prototype.GetSelectOptionsForMap = function () {
        for (var c = 0; c < this.numberOfColumns; c++) {
            var bindingName = this.columns[c].getDataBindingName();
            var columnContentArray = new Array();
            data_container_1.DataContainer.getRows().map(function (row) {
                if (columnContentArray.indexOf(row[bindingName]) > -1) {
                }
                else {
                    columnContentArray.push(row[bindingName]);
                }
            }.bind(this));
            columnContentArray.sort();
            this.selectOptionsArray.push(columnContentArray);
        }
        console.log(this.selectOptionsArray);
    };
    FilterColumn.prototype.FilterElementSelected = function (event) {
        console.log(event.target.value);
    };
    FilterColumn = __decorate([
        core_1.Component({
            selector: 'filter-column',
            templateUrl: '../html/filter-column.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterColumn);
    return FilterColumn;
})();
exports.FilterColumn = FilterColumn;
//# sourceMappingURL=filter-column.js.map