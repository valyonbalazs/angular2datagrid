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
        var numberNewValue = parseInt(newValue);
        var cols = data_container_1.DataContainer.getColumns();
        var colName = cols[col].getDataBindingName();
        if (numberNewValue === NaN) {
            // For demo saving
            data_container_1.DataContainer.setItem(row, colName, newValue);
            caretaker_1.CareTaker.createMemento();
        }
        else {
            // For demo saving
            data_container_1.DataContainer.setItem(row, colName, numberNewValue);
            caretaker_1.CareTaker.createMemento();
        }
        // send to the database with ajax, or websocket or whatever is needed.
        // ADD PREFERED CHANGE SAVING METHOD HERE
    };
    return DataSaver;
}());
exports.DataSaver = DataSaver;
//# sourceMappingURL=edited-cell-data-saver.js.map