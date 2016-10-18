"use strict";
var DataContainerMemento = (function () {
    function DataContainerMemento() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var ddString = "";
        var mmString = "";
        if (dd < 10) {
            ddString = "0" + dd;
        }
        if (mm < 10) {
            mmString = '0' + mm;
        }
        this.creationTime = yyyy + "." + mmString + "." + ddString + ".";
    }
    DataContainerMemento.prototype.setRows = function (rows) {
        this.rows = rows;
    };
    DataContainerMemento.prototype.setColumns = function (cols) {
        this.columns = cols;
    };
    DataContainerMemento.prototype.getRows = function () {
        return this.rows;
    };
    DataContainerMemento.prototype.getColumns = function () {
        return this.columns;
    };
    return DataContainerMemento;
}());
exports.DataContainerMemento = DataContainerMemento;
//# sourceMappingURL=data-container-memento.js.map