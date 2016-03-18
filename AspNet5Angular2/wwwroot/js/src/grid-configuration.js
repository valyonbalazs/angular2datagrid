var GridConfig = (function () {
    function GridConfig() {
        // Default values
        this.isPaginationEnabled = false;
        this.displayedRowsNumberWithPagination = 6;
        // If some default properties need to be changed, do it in here
        this.isPaginationEnabled = true;
        this.displayedRowsNumberWithPagination = 5;
    }
    GridConfig.prototype.GetIsPaginationEnabled = function () {
        return this.isPaginationEnabled;
    };
    GridConfig.prototype.GetDisplayedRowsNumberWithPagination = function () {
        return this.displayedRowsNumberWithPagination;
    };
    return GridConfig;
})();
exports.GridConfig = GridConfig;
//# sourceMappingURL=grid-configuration.js.map