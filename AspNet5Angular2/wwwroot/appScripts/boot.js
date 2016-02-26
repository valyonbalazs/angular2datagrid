var browser_1 = require('angular2/platform/browser');
var grid_container_1 = require('./grid-container');
var data_source_1 = require('./data-source');
var test_data_1 = require('./test-data');
var testData = new test_data_1.TestData();
data_source_1.DataSource.setRows(testData.getRows());
data_source_1.DataSource.setColumns(testData.getColumns());
browser_1.bootstrap(grid_container_1.GridContainer);
//# sourceMappingURL=boot.js.map