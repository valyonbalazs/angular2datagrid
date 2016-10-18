/// <reference path="typings/jquery/jquery.d.ts" /> 
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
var core_1 = require("angular2/core");
var data_container_1 = require("./data-container");
var FilterColumn = (function () {
    function FilterColumn() {
        this.numberOfColumns = 0;
        this.selectedFilterSelectOption = null;
        this.initializer();
    }
    FilterColumn.prototype.ngOnInit = function () {
        console.log("\FILTER-COLUMN was initiatied and created.");
    };
    FilterColumn.prototype.initializer = function () {
        this.selectOptionsArray = new Array();
        this.Columns = data_container_1.DataContainer.getColumns();
        this.numberOfColumns = this.Columns.length;
        this.getSelectOptionsForMap();
    };
    /**
     * Loads the different type of elements into the filter dropdown list.
     */
    FilterColumn.prototype.getSelectOptionsForMap = function () {
        for (var c = 0; c < this.numberOfColumns; c++) {
            var bindingName = this.Columns[c].getDataBindingName();
            var columnContentArray = new Array();
            data_container_1.DataContainer.getRows().map(function (row) {
                if (columnContentArray.indexOf(row[bindingName]) > -1) {
                }
                else {
                    columnContentArray.push(row[bindingName]);
                }
            });
            columnContentArray.push("--none--");
            columnContentArray.sort();
            this.selectOptionsArray.push(columnContentArray);
        }
    };
    /**
     * Besides of the selection of the filter, hides every other rows.
     * @param event: filter selection happened.
     */
    FilterColumn.prototype.filterElementSelected = function (event) {
        var $rows = $("#gridTbody tr");
        var value = $.trim(event.target.value).replace(/ +/g, " ").toLowerCase();
        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, " ").toLowerCase();
            return !~text.indexOf(value);
        }).hide();
        if (event.target.value == "--none--") {
            document.getElementById("paginationFirstPageButton").click();
        }
    };
    FilterColumn = __decorate([
        core_1.Component({
            selector: "filter-column",
            templateUrl: "../html/filter-column.html"
        }), 
        __metadata('design:paramtypes', [])
    ], FilterColumn);
    return FilterColumn;
}());
exports.FilterColumn = FilterColumn;
//# sourceMappingURL=filter-column.js.map