///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var grid_container_1 = require('./grid-container');
var data_container_1 = require('./data-container');
var test_data_1 = require('./test-data');
var pagination_1 = require('./pagination');
var filter_global_1 = require('./filter-global');
var testData = new test_data_1.TestData();
data_container_1.DataContainer.setRows(testData.getRows());
data_container_1.DataContainer.setColumns(testData.getColumns());
browser_1.bootstrap(grid_container_1.GridContainer, [pagination_1.Pagination, filter_global_1.FilterGlobal])
    .then(function (app) {
    console.log(app);
});
//# sourceMappingURL=boot.js.map