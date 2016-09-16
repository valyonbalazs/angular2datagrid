import {Column} from "./column";

/** 
 * Singleton datasource object for the grid.
 * This class will hold the data for the grid
 * in columns and rows format.
 */
export class DataContainer {
    
    private static rows: Array<any>;
    private static columns: Array<Column>;
    private static instance: DataContainer = new DataContainer();

    constructor() {
        if (DataContainer.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        DataContainer.instance = this;
    }

    public static getRows(): Array<any> {
        return DataContainer.rows;
    }

    public static getColumns() : Array<Column> {
        return DataContainer.columns;
    }

    public static setRows(rows: Array<any>) {
        DataContainer.rows = rows;
    }

    public static setColumns(cols: Array<any>) {
        DataContainer.columns = cols;
    }

    public static getNumberOfRows(): number {
        return DataContainer.rows.length;
    }
} 

