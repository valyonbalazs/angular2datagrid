/// <reference path="typings/jquery/jquery.d.ts" />

import {Component, Input, OnInit} from 'angular2/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: '../html/grid.html'
})

export class Grid implements OnInit {

    public columns: Array<Column>;
    public rows: Array<any>;
    private sorter: Sorter = new Sorter();
    @Input() name: string;
    @Input() id: string;

    ngOnInit() {
        console.log("Grid was created with name: " + this.name + " and id: " + this.id);
    }

    public sort(key) {
        this.sorter.sort(key, this.rows);
    }
}