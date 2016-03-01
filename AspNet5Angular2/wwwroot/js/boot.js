var browser_1 = require('angular2/platform/browser');
var grid_container_1 = require('./grid-container');
var data_container_1 = require('./data-container');
var test_data_1 = require('./test-data');
var testData = new test_data_1.TestData();
data_container_1.DataContainer.setRows(testData.getRows());
data_container_1.DataContainer.setColumns(testData.getColumns());
console.log("vmi");
browser_1.bootstrap(grid_container_1.GridContainer);
//# sourceMappingURL=boot.js.map