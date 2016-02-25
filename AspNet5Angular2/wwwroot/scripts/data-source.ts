import {Column} from './column';

// Singleton datasource object for one grid
export class DataSource {
    
    private static instance: DataSource = new DataSource();

    constructor() {
        if (DataSource.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        DataSource.instance = this;
    }

    private static rows: Array<any>;
    private static columns: Array<Column>;

    public static getRows() : Array<any> {
        return DataSource.rows;
    }

    public static getColumns() : Array<Column> {
        return DataSource.columns;
    }

    public static setRows(rows: Array<any>) {
        DataSource.rows = rows;
    }

    public static setColumns(cols: Array<any>) {
        DataSource.columns = cols;
    }

    public static getNumberOfRows(): number {
        return DataSource.rows.length;
    }
}

