"use strict";
var test_data_1 = require('./test-data');
var DataLoader = (function () {
    function DataLoader() {
        this.LoadData();
    }
    DataLoader.prototype.getColumns = function () {
        return this.Columns;
    };
    DataLoader.prototype.getRows = function () {
        return this.Rows;
    };
    DataLoader.prototype.LoadData = function () {
        // ANY KIND OF DATA LOADING SHOULD BE HERE SUCH AS AJAX
        // For testing and development, loading the test data from TestData class
        var testData = new test_data_1.TestData();
        this.Columns = testData.getColumns();
        this.Rows = testData.getRows();
    };
    return DataLoader;
}());
exports.DataLoader = DataLoader;
//# sourceMappingURL=data-loader.js.map