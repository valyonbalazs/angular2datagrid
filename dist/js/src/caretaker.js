/// <reference path="typings/lodash.d.ts" />
"use strict";
var data_container_memento_1 = require("./data-container-memento");
var data_container_1 = require("./data-container");
var CareTaker = (function () {
    function CareTaker() {
        if (CareTaker.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        CareTaker.instance = this;
        CareTaker.mementoList = new Array();
    }
    // For testing purposes, should be removed from the final version
    CareTaker.createMemento = function () {
        var memento = new data_container_memento_1.DataContainerMemento();
        var rows = jQuery.extend(true, {}, data_container_1.DataContainer.getRows());
        var cols = jQuery.extend(true, {}, data_container_1.DataContainer.getColumns());
        memento.setRows(rows);
        memento.setColumns(cols);
        CareTaker.addMemento(memento);
    };
    CareTaker.addMemento = function (memento) {
        CareTaker.mementoList.push(memento);
        CareTaker.displayedMementoStateIndex = CareTaker.mementoList.length - 1;
    };
    CareTaker.getLastMemento = function () {
        var lastIndex = CareTaker.mementoList.length;
        return CareTaker.mementoList[lastIndex];
    };
    CareTaker.getMementoAtIndexPosition = function (index) {
        return CareTaker.mementoList[index];
    };
    CareTaker.undo = function () {
        var listLength = CareTaker.mementoList.length;
        var penultimateStateMemento = null;
        var neededStateIndex = CareTaker.displayedMementoStateIndex - 1;
        if (listLength > 1 && neededStateIndex >= 0) {
            penultimateStateMemento = CareTaker.mementoList[neededStateIndex];
            CareTaker.displayedMementoStateIndex--;
        }
        if (penultimateStateMemento != null) {
            CareTaker.updateDataContainer(penultimateStateMemento);
        }
    };
    CareTaker.redo = function () {
        var listLength = CareTaker.mementoList.length;
        var neededStateMemento = null;
        var neededIndex = CareTaker.displayedMementoStateIndex + 1;
        if (listLength > 1 && (neededIndex <= listLength - 1)) {
            neededStateMemento = CareTaker.mementoList[neededIndex];
            CareTaker.displayedMementoStateIndex++;
        }
        if (neededStateMemento != null) {
            CareTaker.updateDataContainer(neededStateMemento);
        }
    };
    CareTaker.updateDataContainer = function (memento) {
        var rows = memento.getRows();
        var cols = memento.getColumns();
        // This part should be modified if remote saving is needed
        data_container_1.DataContainer.setRows(rows);
        data_container_1.DataContainer.setColumns(cols);
        data_container_1.DataContainer.notifyGrid();
    };
    CareTaker.instance = new CareTaker();
    return CareTaker;
}());
exports.CareTaker = CareTaker;
//# sourceMappingURL=caretaker.js.map