import {Component, View, Inject} from 'angular2/core';
import {Grid} from './grid';
import {Pagination} from './pagination';
import {Column} from './column';
import {DataContainer} from './data-container';
import {GridConfig} from './grid-configuration';
import {PaginationConfig} from './pagination-config';

@Component({
    selector: 'grid-container',
    directives: [Grid, Pagination],
    templateUrl: '../html/grid-container.html'
})

export class GridContainer {

    private rows: Array<any>;
    private columns: Array<Column>;
    private gridConfig: GridConfig = null;

    constructor(gridConfig: GridConfig) {
        this.rows = DataContainer.getRows();
        this.columns = DataContainer.getColumns();

        this.gridConfig = gridConfig;
        this.ProcessGridConfig();
    }

    public getRows() : Array<any> {
        return this.rows;
    }

    public getColumns() : Array<Column> {
        return this.columns;
    } 

    private ProcessGridConfig() {
        if (this.gridConfig.GetIsPaginationEnabled() == true) {

            setTimeout(function () {

                let paginConf = new PaginationConfig();
                paginConf.SetNumberOfDisplayedRows(this.gridConfig.GetDisplayedRowsNumberWithPagination());
                new Pagination(paginConf);

            }.bind(this), 50);
        }
    }

} 




