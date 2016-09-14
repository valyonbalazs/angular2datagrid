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
    @Input() editable: boolean;

    private editedCellTmpValue: string;

    ngOnInit() {
        console.log("\nletrejott GRID with name " + this.name + " and id " + this.id);

        if (this.editable) {
            this.SetTableCellEditableEventHandler();
        }
    }

    public sort(key) {
        this.sorter.sort(key, this.rows);
    }

    public GetIsCellEditable(): boolean {
        return this.editable;
    }

    private SetTableCellEditableEventHandler(): void {
        $("#gridTable").on("input", "td", function() {
            var td = this;
            clearTimeout($.data(this, 'timer'));
            var wait = setTimeout(saveData.bind(td.innerText), 500); // delay after user types
            $(this).data('timer', wait);
        });

        // Save the date of the edited cell in a preferred way
        function saveData() {
            console.log(this);

            // send to the database with ajax, or websocket etc..
        }
    }
} 