/// <reference path="typings/jquery/jquery.d.ts" />
"use strict";
var test_data_1 = require("./test-data");
/**
 * Loads data from the data-source.
 */
var DataLoader = (function () {
    function DataLoader() {
        this.loadData();
    }
    DataLoader.prototype.getColumns = function () {
        return this.columns;
    };
    DataLoader.prototype.getRows = function () {
        return this.rows;
    };
    /**
     * The main method of fetching the data from the data-source.
     */
    DataLoader.prototype.loadData = function () {
        // For testing and demonstration, loading the test data from TestData class
        var testData = new test_data_1.TestData();
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
    };
    return DataLoader;
}());
exports.DataLoader = DataLoader;
//# sourceMappingURL=data-loader.js.map