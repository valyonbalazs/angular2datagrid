import {Component, View, Inject, OnInit} from 'angular2/core';
import {Grid} from './grid';
import {Pagination} from './pagination';
import {Column} from './column';
import {DataContainer} from './data-container';
import {GridConfig} from './grid-configuration';
import {FilterGlobal} from './filter-global';
import {FilterColumn} from './filter-column';

@Component({
    selector: 'grid-container',
    directives: [Grid, Pagination, FilterGlobal, FilterColumn],
    templateUrl: '../html/grid-container.html'
})

export class GridContainer {

    private rows: Array<any>;
    private columns: Array<Column>;
    private isPaginationEnabled: boolean = GridConfig.GetIsPaginationEnabled();
    private isFilterColumnEnabled: boolean = GridConfig.GetIsFilterColumnEnabled();
    private isFilterGlobalEnabled: boolean = GridConfig.GetIsFilterGlobalEnabled();
    private gridTableHeight: number = GridConfig.GetGridTableHeight();

    constructor() {
        this.rows = DataContainer.getRows();
        this.columns = DataContainer.getColumns();
        this.LoadAndSetGridSettings();
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

    public GetIsFilterGlobalEnabled(): boolean {
        return this.isFilterGlobalEnabled;
    }

    public GetIsFilterColumnEnabled(): boolean {
        return this.isFilterColumnEnabled;
    }

    private LoadAndSetGridSettings() {
        this.SetGridTableHeight();
    }

    private SetGridTableHeight() {
        $("gridTable tbody").css("height", this.gridTableHeight + "vh");
    }
       

    ngOnInit() {
        console.log("\nletrejott GRIDCONTAINER");
    }
} 




