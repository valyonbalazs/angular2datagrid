var PaginationConfig = (function () {
    function PaginationConfig() {
        this.numberOfDisplayedRows = 8;
    }
    PaginationConfig.prototype.SetNumberOfDisplayedRows = function (rowsNumber) {
        this.numberOfDisplayedRows = rowsNumber;
    };
    PaginationConfig.prototype.GetNumberOfDisplayedRows = function () {
        return this.numberOfDisplayedRows;
    };
    return PaginationConfig;
})();
exports.PaginationConfig = PaginationConfig;
//# sourceMappingURL=pagination-config.js.map