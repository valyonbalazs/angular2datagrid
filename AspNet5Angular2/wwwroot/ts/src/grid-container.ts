import {Component, View} from 'angular2/core';
import {Grid} from './grid';
import {Pagination} from './pagination';
import {Column} from './column';
import {DataContainer} from './data-container';

@Component({
    selector: 'grid-container',
    directives: [Grid, Pagination],
    template: '<grid id="gridId" name="gridName" [rows]="rows" [columns]="columns"></grid><pagination></pagination>'
})

export class GridContainer {

    private rows: Array<any>;
    private columns: Array<Column>;

    constructor() {
        this.rows = DataContainer.getRows();
        this.columns = DataContainer.getColumns();
        setTimeout(function () { new Pagination(); }.bind(this), 50);
    }

    public getRows() : Array<any> {
        return this.rows;
    }

    public getColumns() : Array<Column> {
        return this.columns;
    }
} 




