///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from "angular2/platform/browser";
import {GridContainer} from "./grid-container";
import {DataContainer} from "./data-container";
import {DataLoader} from "./data-loader";
import {GridConfigurator} from "./grid-configurator";

/**
 * Initiate the data container and fetch the data for the grid.
 */
let dataLoader = new DataLoader();
DataContainer.setRows(dataLoader.getRows());
DataContainer.setColumns(dataLoader.getColumns());

/**
 * Starts the application and loads the main container,
 * the GridConfigurator which contains all of the modules.
 */
bootstrap(GridContainer, [GridConfigurator])
    .then(app => {
        console.log(app);
    });
