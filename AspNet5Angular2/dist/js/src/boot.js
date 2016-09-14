///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
"use strict";
var browser_1 = require('angular2/platform/browser');
var grid_container_1 = require('./grid-container');
var data_container_1 = require('./data-container');
var data_loader_1 = require('./data-loader');
var grid_configurator_1 = require('./grid-configurator');
var dataLoader = new data_loader_1.DataLoader();
data_container_1.DataContainer.setRows(dataLoader.getRows());
data_container_1.DataContainer.setColumns(dataLoader.getColumns());
browser_1.bootstrap(grid_container_1.GridContainer, [grid_configurator_1.GridConfigurator])
    .then(function (app) {
    console.log(app);
});
//# sourceMappingURL=boot.js.map