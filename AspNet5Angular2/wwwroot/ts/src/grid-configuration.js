var GridConfig = (function () {
    function GridConfig() {
        // Singleton
        if (GridConfig.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        GridConfig.instance = this;
        // If some default properties need to be changed, do it in here
        GridConfig.isPaginationEnabled = true;
        GridConfig.displayedRowsNumberWithPagination = 5;
    }
    GridConfig.GetIsPaginationEnabled = function () {
        return GridConfig.isPaginationEnabled;
    };
    GridConfig.GetDisplayedRowsNumberWithPagination = function () {
        return GridConfig.displayedRowsNumberWithPagination;
    };
    GridConfig.instance = new GridConfig();
    // Default values
    GridConfig.isPaginationEnabled = false;
    GridConfig.displayedRowsNumberWithPagination = 6;
    return GridConfig;
})();
exports.GridConfig = GridConfig;
