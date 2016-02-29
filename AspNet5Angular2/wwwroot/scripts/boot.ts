import {bootstrap} from 'angular2/platform/browser';
import {GridContainer} from './grid-container';
import {DataContainer} from './data-container';
import {Column} from './column';
import {TestData} from './test-data';

let testData = new TestData();
DataContainer.setRows(testData.getRows());
DataContainer.setColumns(testData.getColumns());

console.log("vmi");

bootstrap(GridContainer);

