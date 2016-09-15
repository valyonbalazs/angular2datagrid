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

    private rightClickedRow;

    private editedCellTmpValue: string;

    ngOnInit() {
        console.log("\nletrejott GRID with name " + this.name + " and id " + this.id);

        if (this.editable) {
            this.SetTableCellEditableEventHandler();
        }

        setTimeout(this.SetRightClickContextMenu, 2000);
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

    private SetRightClickContextMenu(): void {
        var rows = $("#gridTbody").children();
        var rightClickedRow = null;
        for (var i = 0; i < rows.length - 1; i++) {
            var row = rows[i];
            $(row).bind("contextmenu", function (event) {

                // Avoid the real one
                event.preventDefault();

                rightClickedRow = this;
                // Show contextmenu
                $(".custom-menu").finish().toggle(100).

                    // In the right position (the mouse)
                    css({
                        top: event.pageY + "px",
                        left: event.pageX + "px"
                    });
            });

            $(row).bind("mousedown", function (e) {

                // If the clicked element is not the menu
                if (!($(e.target).parents(".custom-menu").length > 0)) {

                    // Hide it
                    $(".custom-menu").hide(100);
                }
            });
        }

        // If the menu element is clicked
        $(".custom-menu h5").click(function () {

            // This is the triggered action name
            switch ($(this).attr("data-action")) {

                // A case for each action. Your actions here
                case "first": SelectRow(); break;
                case "second": DeleteRow(); break;
            }

            // Hide it AFTER the action was triggered
            $(".custom-menu").hide(100);
        });

        function SelectRow() {
            console.log(rightClickedRow);
        }

        function DeleteRow() {
            console.log(rightClickedRow);
        }
    }
} 