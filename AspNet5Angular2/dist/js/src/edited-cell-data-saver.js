"use strict";
var data_container_1 = require("./data-container");
/**
 * Saving edited grid cells data.
 */
var DataSaver = (function () {
    function DataSaver() {
    }
    DataSaver.prototype.saveData = function (cellData) {
        console.log(cellData);
        var id = cellData.getAttribute('id');
        var splittedId = id.split("_");
        var row = splittedId[0];
        var col = splittedId[1];
        var newValue = cellData.innerText;
        var cols = data_container_1.DataContainer.getColumns();
        var colName = cols[col].getDataBindingName();
        data_container_1.DataContainer.setItem(row, colName, newValue);
        // send to the database with ajax, or websocket or whatever is needed.
        // ADD PREFERED CHANGE SAVING METHOD HERE
    };
    return DataSaver;
}());
exports.DataSaver = DataSaver;
//# sourceMappingURL=edited-cell-data-saver.js.map