"use strict";
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.numberOfDisplayedRows = 6;
    }
    PaginationConfig.prototype.SetNumberOfDisplayedRows = function (rowsNumber) {
        this.numberOfDisplayedRows = rowsNumber;
    };
    return PaginationConfig;
}());
exports.PaginationConfig = PaginationConfig;
