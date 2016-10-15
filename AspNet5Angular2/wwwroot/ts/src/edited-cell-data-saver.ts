import {IDataSaver} from "./iedited-cell-data-saver";
import {DataContainer} from "./data-container";

/**
 * Saving edited grid cells data.
 */
export class DataSaver implements IDataSaver{

    public saveData(cellData: any): void {

        console.log(cellData);

        var id = cellData.getAttribute('id');
        var splittedId = id.split("_");
        var row = splittedId[0];
        var col = splittedId[1];
        var newValue = cellData.innerText;

        var cols = DataContainer.getColumns();
        var colName = cols[col].getDataBindingName();

        DataContainer.setItem(row, colName, newValue);

        // send to the database with ajax, or websocket or whatever is needed.
        // ADD PREFERED CHANGE SAVING METHOD HERE
    }
}