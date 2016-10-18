/**
 * Root interface for saving the grid's edited cells data.
 */
export interface IDataSaver {

    saveData(cellData : any) : void;
}