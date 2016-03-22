/// <reference path="typings/jquery/jquery.d.ts" /> 

import {Component, OnInit} from 'angular2/core';
import {Column} from './column';
import {DataContainer} from './data-container';

@Component({
    selector: 'filter-column',
    templateUrl: '../html/filter-column.html'
})

export class FilterColumn {

    public columns: Array<Column>;
    private numberOfColumns: number = 0;
    private selectOptionsArray: Array<any>;
    private selectedFilterSelectOption: HTMLElement = null;


    constructor() {
        this.Initializer();                      
    }

    ngOnInit() {
        console.log("\nletrejott FILTER-COLUMN");
    }
    
    private Initializer() {
        this.selectOptionsArray = new Array<any>();
        this.columns = DataContainer.getColumns();
        this.numberOfColumns = this.columns.length;
        this.GetSelectOptionsForMap();
    }
    
    private GetSelectOptionsForMap() {
        
        for (let c = 0; c < this.numberOfColumns; c++) {
            var bindingName = this.columns[c].getDataBindingName();
            var columnContentArray = new Array<any>();
            DataContainer.getRows().map(function (row) {
                if (columnContentArray.indexOf(row[bindingName]) > -1) {

                }
                else {
                    columnContentArray.push(row[bindingName]);                   
                }
            }.bind(this));
            columnContentArray.push("--none--");
            columnContentArray.sort();
            this.selectOptionsArray.push(columnContentArray);
        }

        console.log(this.selectOptionsArray);
    }

    private FilterElementSelected(event) {
        console.log(event.target.value);

        var $rows = $('#gridTbody tr');
        var value = $.trim(event.target.value).replace(/ +/g, ' ').toLowerCase();
        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            console.log(text);
            console.log(text.indexOf(value));
            return !~text.indexOf(value);
        }).hide()

        if (event.target.value == "--none--") {
            document.getElementById("paginationFirstPageButton").click();
        }
    }
}