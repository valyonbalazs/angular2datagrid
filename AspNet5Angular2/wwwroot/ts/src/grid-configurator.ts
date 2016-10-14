import {Component, OnInit, Input} from "angular2/core";
import {Grid} from "./grid";
import {Pagination} from "./pagination";
import {Column} from "./column";
import {DataContainer} from "./data-container";
import {FilterGlobal} from "./filter-global";
import {FilterColumn} from "./filter-column";

@Component({
    selector: "grid-configurator",
    directives: [Grid, Pagination, FilterGlobal, FilterColumn],
    templateUrl: "../html/grid-configurator.html"
})

/**
* This contains all of the modules and gets the module settings
* as input directives through the html file.
*/
export class GridConfigurator implements OnInit {

    @Input() name: string;
    @Input("pagination") isPaginationEnabled: boolean;
    @Input("filtercolumn") isFilterColumnEnabled: boolean;
    @Input("filterglobal") isFilterGlobalEnabled: boolean;
    @Input("tableheight") gridTableHeight: number;
    @Input() editable: boolean;
    @Input("numberofrows") numberOfRows: number;
    @Input("menu") isMenuEnabled: boolean;

    private rows: Array<any>;
    private columns: Array<Column>;

    ngOnInit() {
        console.log("\nGRIDCONFIGURATOR was initiatied and created");
    }

    constructor() {
        this.rows = DataContainer.getRows();
        this.columns = DataContainer.getColumns();
        this.LoadAndSetGridSettings();
    }

    public GetRows(): Array<any> {
        return this.rows;
    }

    public GetColumns(): Array<Column> {
        return this.columns;
    }

    public GetIsPaginationEnabled(): boolean {
        return this.isPaginationEnabled;
    }

    public GetIsFilterGlobalEnabled(): boolean {
        return this.isFilterGlobalEnabled;
    }

    public GetIsFilterColumnEnabled(): boolean {
        return this.isFilterColumnEnabled;
    }

    public GetIsMenuEnabled(): boolean {
        return this.isMenuEnabled;
    }

    private LoadAndSetGridSettings(): void {
        this.SetGridTableHeight();
    }

    private SetGridTableHeight(): void {
        $("gridTable tbody").css("height", this.gridTableHeight + "vh");
    } 
}