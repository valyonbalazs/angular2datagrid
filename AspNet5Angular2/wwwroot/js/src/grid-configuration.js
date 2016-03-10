"use strict";
var GridConfig = (function () {
    function GridConfig() {
        // If some default properties need to be changed, do it in here
        // Default values
        this.isPaginationEnabled = false;
    }
    GridConfig.prototype.GetIsPaginationEnabled = function () {
        return this.isPaginationEnabled;
    };
    return GridConfig;
}());
exports.GridConfig = GridConfig;
//# sourceMappingURL=grid-configuration.js.map