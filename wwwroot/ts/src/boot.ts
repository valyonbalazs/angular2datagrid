///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from "angular2/platform/browser";
import {GridContainer} from "./grid-container";
import {DataContainer} from "./data-container";
import {GridConfigurator} from "./grid-configurator";

/**
 * Starts the application and loads the main container,
 * the GridConfigurator which contains all of the modules.
 */

DataContainer.loadData();

bootstrap(GridContainer, [GridConfigurator])
    .then(app => {
        // If some debugging or settings needs to be done do here.
    });
