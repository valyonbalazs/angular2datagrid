///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
"use strict";
var browser_1 = require("angular2/platform/browser");
var grid_container_1 = require("./grid-container");
var data_container_1 = require("./data-container");
var grid_configurator_1 = require("./grid-configurator");
/**
 * Starts the application and loads the main container,
 * the GridConfigurator which contains all of the modules.
 */
data_container_1.DataContainer.loadData();
browser_1.bootstrap(grid_container_1.GridContainer, [grid_configurator_1.GridConfigurator])
    .then(function (app) {
    // If some debugging or settings needs to be done do here.
});
//# sourceMappingURL=boot.js.map