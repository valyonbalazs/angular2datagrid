"use strict";
var GridConfig = (function () {
    function GridConfig() {
        this.isPaginationEnabled = true;
    }
    GridConfig.prototype.SetIsPaginationEnabled = function (isEnabled) {
        this.isPaginationEnabled = isEnabled;
    };
    GridConfig.prototype.GetIsPaginationEnabled = function () {
        return this.isPaginationEnabled;
    };
    return GridConfig;
}());
exports.GridConfig = GridConfig;
