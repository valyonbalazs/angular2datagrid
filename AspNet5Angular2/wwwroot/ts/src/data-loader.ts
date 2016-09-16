/// <reference path="typings/jquery/jquery.d.ts" />

import {Column} from "./column"; 
import {TestData} from "./test-data"; 

/**
 * Loads data from the data-source.
 */
export class DataLoader {

    private columns: Array<Column>;
    private rows: Array<any>;

    constructor() {
        this.loadData();
    }

    public getColumns() : Array<Column> {
        return this.columns;
    }

    public getRows() : Array<any> {
        return this.rows;
    }

    /**
     * The main method of fetching the data from the data-source.
     */
    private loadData(): void {
        // For testing and demonstration, loading the test data from TestData class
        var testData = new TestData();
        this.columns = testData.getColumns();
        this.rows = testData.getRows();


        // ANY KIND OF DATA LOADING SHOULD BE PUT HERE
        // Below 2 basic example is given with Jquery-ajax:
        // var dataContainer = null;
        // var url = "http://mydomain.com/restapi/v1/getdata";
        // $.ajax({
        //     url: url,
        //     type: "GET"
        //     dataType: "json",
        //     data: dataContainer,
        //     success: dataContainer => {
        //         // do something with the data
        //     }
        // });

        // $.getJSON(url, data => {
        //     // do something with the fetched data
        // });
    }
}