/// <reference path="typings/jquery/jquery.d.ts" /> 

import {Component, OnInit} from "angular2/core";
import {Column} from "./column";
import {DataContainer} from "./data-container";

@Component({
    selector: "filter-column",
    templateUrl: "../html/filter-column.html"
})

/**
* Responsible for creating filters for every column in the grid.
*/
export class FilterColumn {

    public Columns: Array<Column>;
    private numberOfColumns: number = 0;
    private selectOptionsArray: Array<any>;
    private selectedFilterSelectOption: HTMLElement = null;

    constructor() {
        this.initializer();                      
    }

    ngOnInit() {
        console.log("\FILTER-COLUMN was initiatied and created.");
    }
    
    private initializer(): void {
        this.selectOptionsArray = new Array<any>();
        this.Columns = DataContainer.getColumns();
        this.numberOfColumns = this.Columns.length;
        this.getSelectOptionsForMap();
    }

    /**
     * Loads the different type of elements into the filter dropdown list.
     */
    private getSelectOptionsForMap(): void {
        
        for (let c = 0; c < this.numberOfColumns; c++) {
            var bindingName = this.Columns[c].getDataBindingName();
            var columnContentArray = new Array<any>();
            DataContainer.getRows().map(row => {
                if (columnContentArray.indexOf(row[bindingName]) > -1) {

                }
                else {
                    columnContentArray.push(row[bindingName]);                   
                }
            });
            columnContentArray.push("--none--");
            columnContentArray.sort();
            this.selectOptionsArray.push(columnContentArray);
        }
    }

    /**
     * Besides of the selection of the filter, hides every other rows.
     * @param event: filter selection happened.
     */
    private filterElementSelected(event): void {
        var $rows = $("#gridTbody tr");
        var value = $.trim(event.target.value).replace(/ +/g, " ").toLowerCase();
        $rows.show().filter(function () {
            const text = $(this).text().replace(/\s+/g, " ").toLowerCase();
            return !~text.indexOf(value);
        }).hide()

        if (event.target.value == "--none--") {
            document.getElementById("paginationFirstPageButton").click();
        }
    }
}