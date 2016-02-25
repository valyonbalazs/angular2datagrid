/// <reference path="typings/jquery/jquery.d.ts" />

import {Component, Input, OnInit} from 'angular2/core';
import {Column} from './column';
import {Sorter} from './sorter';
import {DataSource} from './data-source';
import {Pagination} from './pagination';

@Component({
    selector: 'grid',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: './grid.html'
})
export class Grid implements OnInit {

    columns: Array<Column>;
    rows: Array<any>;

    @Input() name: string;

    private sorter = new Sorter();

    public sort(key) {
        this.sorter.sort(key, this.rows);
    }

    ngOnInit() {
        console.log(this.name);
    }

}