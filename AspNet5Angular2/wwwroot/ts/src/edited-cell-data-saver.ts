import {IDataSaver} from "./iedited-cell-data-saver";
import {DataContainer} from "./data-container";
import {CareTaker} from "./caretaker";
import {DataContainerMemento} from "./data-container-memento";

/**
 * Saving edited grid cells data.
 */
export class DataSaver implements IDataSaver{

    public saveData(cellData: any): void {

        // Update the DataContainer with the edited cell's data
        var id = cellData.getAttribute('id');
        var splittedId = id.split("_");
        var row = splittedId[0];
        var col = splittedId[1];
        var newValue = cellData.innerText;

        var numberNewValue = parseInt(newValue);
        var cols = DataContainer.getColumns();
        var colName = cols[col].getDataBindingName();
        if (numberNewValue === NaN) {
            // For demo saving
            DataContainer.setItem(row, colName, newValue);
            CareTaker.createMemento();
        } else {
            // For demo saving
            DataContainer.setItem(row, colName, numberNewValue);
            CareTaker.createMemento();
        }        



        // send to the database with ajax, or websocket or whatever is needed.
        // ADD PREFERED CHANGE SAVING METHOD HERE
    }


}