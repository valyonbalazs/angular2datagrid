var GridConfig = (function () {
    function GridConfig() {
        // Singleton
        if (GridConfig.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        GridConfig.instance = this;
    }
    GridConfig.GetIsPaginationEnabled = function () {
        return GridConfig.isPaginationEnabled;
    };
    GridConfig.GetDisplayedRowsNumberWithPagination = function () {
        return GridConfig.displayedRowsNumberWithPagination;
    };
    GridConfig.prototype.ngOnInit = function () {
        console.log("\nletrejott GRIDCONFIG");
    };
    GridConfig.instance = new GridConfig();
    // Default values
    GridConfig.isPaginationEnabled = true;
    GridConfig.displayedRowsNumberWithPagination = 6;
    return GridConfig;
})();
exports.GridConfig = GridConfig;
//# sourceMappingURL=grid-configuration.js.map