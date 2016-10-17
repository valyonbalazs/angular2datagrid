import {Column} from "./column";
import {DataLoader} from "./data-loader";
import {Grid} from "./grid";

/** 
 * Singleton datasource object for the grid.
 * This class will hold the data for the grid
 * in columns and rows format.
 */
export class DataContainer { 
    
    public static rows: Array<any>;
    public static columns: Array<Column>;
    public static instance: DataContainer = new DataContainer();
    private static grid: Grid;

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

    public static setItem(rowIndex: number, colName: string, value: any): void {
    
        DataContainer.rows[rowIndex][colName] = value;

    }

    public static gridSubscribe(datagrid: Grid): void {
        DataContainer.grid = datagrid;
    }

    public static notifyGrid(): void {
        DataContainer.grid.notifyAboutChange();
    }

    /**
     * Initiate the data container and fetch the data for the grid.
     */
    public static loadData(): void {
        let dataLoader = new DataLoader();
        DataContainer.setRows(dataLoader.getRows());
        DataContainer.setColumns(dataLoader.getColumns());
    }
} 

