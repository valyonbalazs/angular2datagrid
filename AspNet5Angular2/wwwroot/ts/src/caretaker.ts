/// <reference path="typings/lodash.d.ts" />

import {DataContainerMemento} from "./data-container-memento";
import {DataContainer} from "./data-container";

export class CareTaker {

    private static mementoList: Array<DataContainerMemento>;
    private static displayedMementoStateIndex: number;

    public static instance: CareTaker = new CareTaker();

    constructor() {
        if (CareTaker.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        CareTaker.instance = this;
        CareTaker.mementoList = new Array();
    }

    // For testing purposes, should be removed from the final version
    public static createMemento(): void {
        var memento = new DataContainerMemento();
        var rows = jQuery.extend(true, {}, DataContainer.getRows());
        var cols = jQuery.extend(true, {}, DataContainer.getColumns());
        memento.setRows(rows);
        memento.setColumns(cols);
        CareTaker.addMemento(memento);
    }

    public static addMemento(memento: DataContainerMemento): void {
        CareTaker.mementoList.push(memento);

        CareTaker.displayedMementoStateIndex = CareTaker.mementoList.length - 1;
    }

    public static getLastMemento(): DataContainerMemento {
        var lastIndex = CareTaker.mementoList.length;
        return CareTaker.mementoList[lastIndex];
    }

    public static getMementoAtIndexPosition(index: number): DataContainerMemento {
        return CareTaker.mementoList[index];
    }

    public static undo(): void {

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
    }

    public static redo(): void {
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
    }

    public static  updateDataContainer(memento: DataContainerMemento): void {

        var rows = memento.getRows();
        var cols = memento.getColumns();

        DataContainer.setRows(rows);
        DataContainer.setColumns(cols);

        DataContainer.notifyGrid();
    }
}