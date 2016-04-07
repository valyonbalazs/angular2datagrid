///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {GridContainer} from './grid-container';
import {DataContainer} from './data-container';
import {GridConfig} from './grid-configuration';
import {Column} from './column';
import {DataLoader} from './data-loader';
import {Pagination} from './pagination';
import {PaginationConfig} from './pagination-config';
import {FilterGlobal} from './filter-global';
import {FilterColumn} from './filter-column';


let dataLoader = new DataLoader();
DataContainer.setRows(dataLoader.getRows());
DataContainer.setColumns(dataLoader.getColumns());

bootstrap(GridContainer, [Pagination, FilterGlobal, FilterColumn])
    .then(app => {
        console.log(app);
    });
