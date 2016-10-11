import {IDataSaver} from "./iedited-cell-data-saver";

/**
 * Saving edited grid cells data.
 */
export class DataSaver implements IDataSaver{

    public saveData(cellData : any) : void {
        // send to the database with ajax, or websocket or whatever is needed.
        // ADD PREFERED CHANGE SAVING METHOD HERE
    }
}