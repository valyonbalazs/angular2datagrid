import {Column} from './column'; 
import {TestData} from './test-data'; 

export class DataLoader {

    private Columns: Array<Column>;
    private Rows: Array<any>;

    constructor() {
        this.LoadData();
    }

    public getColumns() : Array<Column> {
        return this.Columns;
    }

    public getRows() : Array<any> {
        return this.Rows;
    }

    private LoadData() {


        // ANY KIND OF DATA LOADING SHOULD BE HERE SUCH AS AJAX


        // For testing and development, loading the test data from TestData class
        var testData = new TestData();
        this.Columns = testData.getColumns();
        this.Rows = testData.getRows();
    }
}