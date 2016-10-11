"use strict";
/**
 * Saving edited grid cells data.
 */
var DataSaver = (function () {
    function DataSaver() {
    }
    DataSaver.prototype.saveData = function (cellData) {
        // send to the database with ajax, or websocket or whatever is needed.
        // ADD PREFERED CHANGE SAVING METHOD HERE
    };
    return DataSaver;
}());
exports.DataSaver = DataSaver;
//# sourceMappingURL=edited-cell-data-saver.js.map