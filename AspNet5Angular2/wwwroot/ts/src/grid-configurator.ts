import {Component, OnInit, Input} from 'angular2/core';
import {Grid} from './grid';
import {Pagination} from './pagination';
import {Column} from './column';
import {DataContainer} from './data-container';
import {GridConfig} from './grid-configuration';
import {FilterGlobal} from './filter-global';
import {FilterColumn} from './filter-column';

@Component({
    selector: 'grid-configurator',
    directives: [Grid, Pagination, FilterGlobal, FilterColumn],
    templateUrl: '../html/grid-configurator.html'
})

export class GridConfigurator implements OnInit {

    private rows: Array<any>;
    private columns: Array<Column>;

    @Input() name: string;
    @Input("pagination") isPaginationEnabled: boolean;
    @Input("filtercolumn") isFilterColumnEnabled: boolean;
    @Input("filterglobal") isFilterGlobalEnabled: boolean;
    @Input("tableheight") gridTableHeight: number;
    @Input() editable: boolean;
    @Input("numberofrows") numberOfRows: number;

    ngOnInit() {
        console.log("\nletrejott GRIDCONFIGURATOR");
    }

    constructor() {
        this.rows = DataContainer.getRows();
        this.columns = DataContainer.getColumns();
        this.LoadAndSetGridSettings();
    }

    public getRows(): Array<any> {
        return this.rows;
    }

    public getColumns(): Array<Column> {
        return this.columns;
    }

    public GetIsPaginationEnabled(): boolean {
        // return this.isPaginationEnabled == "true" ? true : false;
        return this.isPaginationEnabled;
    }

    public GetIsFilterGlobalEnabled(): boolean {
        //return this.isFilterGlobalEnabled == "true" ? true : false;
        return this.isFilterGlobalEnabled;
    }

    public GetIsFilterColumnEnabled(): boolean {
        // return this.isFilterColumnEnabled == "true" ? true : false;
        return this.isFilterColumnEnabled;
    }

    private LoadAndSetGridSettings() {
        this.SetGridTableHeight();
    }

    private SetGridTableHeight() {
        $("gridTable tbody").css("height", this.gridTableHeight + "vh");
    } 
}