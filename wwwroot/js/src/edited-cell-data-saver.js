"use strict";
var data_container_1 = require("./data-container");
var caretaker_1 = require("./caretaker");
/**
 * Saving edited grid cells data.
 */
var DataSaver = (function () {
    function DataSaver() {
    }
    DataSaver.prototype.saveData = function (cellData) {
        // Update the DataContainer with the edited cell's data
        var id = cellData.getAttribute('id');
        var splittedId = id.split("_");
        var row = splittedId[0];
        var col = splittedId[1];
        var newValue = cellData.innerText;
        var cols = data_container_1.DataContainer.getColumns();
        var colName = cols[col].getDataBindingName();
        if (typeof newValue === "string") {
            // For demo saving
            data_container_1.DataContainer.setItem(row, colName, newValue);
            caretaker_1.CareTaker.createMemento();
        }
        else if (typeof newValue === "number") {
            // For demo saving
            data_container_1.DataContainer.setItem(row, colName, Number(newValue));
            caretaker_1.CareTaker.createMemento();
        }
    };
    return DataSaver;
}());
exports.DataSaver = DataSaver;
//# sourceMappingURL=edited-cell-data-saver.js.map