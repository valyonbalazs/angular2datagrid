"use strict";
var GridConfig = (function () {
    function GridConfig() {
        // Singleton
        if (GridConfig.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        GridConfig.instance = this;
    }
    GridConfig.GetDisplayedRowsNumberWithPagination = function () {
        return GridConfig.displayedRowsNumberWithPagination;
    };
    GridConfig.GetIsPaginationEnabled = function () {
        return GridConfig.isPaginationEnabled;
    };
    GridConfig.GetIsFilterGlobalEnabled = function () {
        return GridConfig.isFilterGlobalEnabled;
    };
    GridConfig.GetIsFilterColumnEnabled = function () {
        return GridConfig.isFilterColumnEnabled;
    };
    GridConfig.GetGridTableHeight = function () {
        return GridConfig.gridTableHeight;
    };
    GridConfig.prototype.ngOnInit = function () {
        console.log("\nletrejott GRIDCONFIG");
    };
    GridConfig.instance = new GridConfig();
    // Default values
    GridConfig.isPaginationEnabled = true;
    GridConfig.displayedRowsNumberWithPagination = 12;
    GridConfig.isFilterGlobalEnabled = true;
    GridConfig.isFilterColumnEnabled = true;
    GridConfig.gridTableHeight = 40;
    return GridConfig;
}());
exports.GridConfig = GridConfig;
//# sourceMappingURL=grid-configuration.js.map