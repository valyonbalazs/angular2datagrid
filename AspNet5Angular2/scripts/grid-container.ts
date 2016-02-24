import {Component, View} from 'angular2/core';
import {Grid} from './grid';
import {Pagination} from './pagination';
import {Column} from './column';
import {DataSource} from './data-source';

@Component({
    selector: 'grid-container',
    directives: [Grid, Pagination],
    template: '<grid id="gridId" name="gridName" [rows]="rows" [columns]="columns"></grid><pagination></pagination>'
})

export class GridContainer {

    rows: Array<any>;
    columns: Array<Column>;

    constructor() {
        this.rows = DataSource.getRows();
        this.columns = DataSource.getColumns();
        setTimeout(function () { new Pagination(); }.bind(this), 50);
    }
}




