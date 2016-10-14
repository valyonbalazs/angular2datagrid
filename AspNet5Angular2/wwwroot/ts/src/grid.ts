/// <reference path="typings/jquery/jquery.d.ts" />

import {Component, Input, OnInit} from "angular2/core";
import {Column} from "./column";
import {Sorter} from "./sorter";
import {DataSaver} from "./edited-cell-data-saver";

@Component({
    selector: "grid",
    templateUrl: "../html/grid.html"
})

/**
* The main Grid module. Represent the logic of the data-table (grid).
*/
export class Grid implements OnInit {

    @Input() name: string;
    @Input() id: string;
    @Input() editable: boolean;
    @Input("menu") isMenuEnabled: boolean;
    @Input() rows: Array<any>;
    @Input() columns: Array<Column>;

    private sorter: Sorter = new Sorter();
    private editedCellTmpValue: string;

    ngOnInit() {
        console.log(`\nGRID was initiatied and created with name ${this.name} and id ${this.id}`);

        if (this.editable) {
            this.setTableCellEditableEventHandler();
        }

        setTimeout(this.setRightClickContextMenu, 300);
    }

    /**
     * This method is called when the User wants to sort by a column.
     * @param key: key of the column.
     */
    public Sort(key): void {
        this.sorter.sort(key, this.rows);
    }

    public GetIsCellEditable(): boolean {
        return this.editable;
    }

    public GetIsMenuEnabled(): boolean {
        return this.isMenuEnabled;
    }

    /**
     * When the table is editable, saving the edited cell's
     * content.
     */
    private setTableCellEditableEventHandler(): void {
        $("#gridTable").on("input", "td", function() {
            var td = this;

            // Save the date of the edited cell in a preferred way.
            var dataSaver = new DataSaver();

            // Delay (waiting) added for user typings
            clearTimeout($.data(this, "timer"));
            const wait = setTimeout(dataSaver.saveData(td.innerText), 500);

            $(this).data("timer", wait);
        });
    }

    /**
     * Adding rightclick contextmenu eventhandler to the table.
     */
    private setRightClickContextMenu(): void {
        var rows = $("#gridTbody").children();
        var rightClickedRow = null;
        for (var i = 0; i < rows.length - 1; i++) {
            var row = rows[i];
            $(row).bind("contextmenu", function (event) {
                // Disable the casual right-click menu
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

            $(row).bind("mousedown", e => {
                // If the clicked element is not the menu
                if (!($(e.target).parents(".custom-menu").length > 0)) {
                    $(".custom-menu").hide(100);
                }
            });
        }

        // If the menu element is clicked
        $(".custom-menu h5").click(function () {
            switch ($(this).attr("data-action")) {

                // Further actions can be added or change what already here.
                case "select": SelectRow(); break;
                case "delete": DeleteRow(); break;
            }
            $(".custom-menu").hide(100);
        });

        // CHANGE THE LOGIC OF THESE METHODS AS NEEDED
        /**
         * The method is responsible for the actions of a selection of a row.
         */
        function SelectRow() {
            var backgroundColor = $(rightClickedRow).css("background-color");
            if ((backgroundColor == "rgba(0, 0, 0, 0)") ||
                (backgroundColor == "rgb(0, 0, 0)") ||
                (backgroundColor == "rgb(249, 249, 249)")) {
                $(rightClickedRow).css("background-color", "#E8CC6F");
            } else {
                $(rightClickedRow).css("background-color", "#F9F9F9");
            }

            // Do something with the selected row as needed
            // ADD CODE HERE FOR FURTHER MODIFICATION
        }

        /**
         * The method is responsibe for the action of deleting a row.
         */
        function DeleteRow() {
            // Just hiding for demonstration, more complex operation could 
            $(rightClickedRow).remove();
            $("#rowDeletedAlert").show();

            // ADD HERE THE DELETION FROM DB LOGIC 
        }
    }
} 