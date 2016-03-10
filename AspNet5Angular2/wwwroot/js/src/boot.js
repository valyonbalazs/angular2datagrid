///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
"use strict";
var browser_1 = require('angular2/platform/browser');
var grid_container_1 = require('./grid-container');
var data_container_1 = require('./data-container');
var test_data_1 = require('./test-data');
var grid_configuration_1 = require('./grid-configuration');
var testData = new test_data_1.TestData();
data_container_1.DataContainer.setRows(testData.getRows());
data_container_1.DataContainer.setColumns(testData.getColumns());
browser_1.bootstrap(grid_container_1.GridContainer, [grid_configuration_1.GridConfig]);
//# sourceMappingURL=boot.js.map