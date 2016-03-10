///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {GridContainer} from './grid-container';
import {DataContainer} from './data-container';
import {Column} from './column';
import {TestData} from './test-data';
import {GridConfig} from './grid-configuration';

let testData = new TestData();
DataContainer.setRows(testData.getRows());
DataContainer.setColumns(testData.getColumns());

bootstrap(GridContainer, [GridConfig]); 
