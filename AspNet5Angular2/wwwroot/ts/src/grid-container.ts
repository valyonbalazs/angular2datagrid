import {Component, View, Inject, OnInit} from 'angular2/core';
import {Grid} from './grid';
import {Pagination} from './pagination';
import {Column} from './column';
import {DataContainer} from './data-container';
import {GridConfig} from './grid-configuration';
import {FilterGlobal} from './filter-global';

@Component({
    selector: 'grid-container',
    directives: [Grid, Pagination, FilterGlobal],
    templateUrl: '../html/grid-container.html'
})

export class GridContainer {

    private rows: Array<any>;
    private columns: Array<Column>;
    private isPaginationEnabled: boolean = GridConfig.GetIsPaginationEnabled();

    constructor() {
        this.rows = DataContainer.getRows();
        this.columns = DataContainer.getColumns();
        // this.ProcessGridConfiguration();
    }

    public getRows() : Array<any> {
        return this.rows;
    }

    public getColumns() : Array<Column> {
        return this.columns;
    }

    public GetIsPaginationEnabled() {
        return this.isPaginationEnabled;
    }
    
    public ProcessGridConfiguration() {
        this.isPaginationEnabled = GridConfig.GetIsPaginationEnabled();
        console.log(this.isPaginationEnabled);
    }     

    ngOnInit() {
        console.log("\nletrejott GRIDCONTAINER");
    }
} 




