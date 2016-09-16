/// <reference path="typings/jquery/jquery.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var sorter_1 = require("./sorter");
var Grid = (function () {
    function Grid() {
        this.sorter = new sorter_1.Sorter();
    }
    Grid.prototype.ngOnInit = function () {
        console.log("\nletrejott GRID with name " + this.name + " and id " + this.id);
        if (this.editable) {
            this.SetTableCellEditableEventHandler();
        }
        setTimeout(this.SetRightClickContextMenu, 2000);
    };
    Grid.prototype.sort = function (key) {
        this.sorter.sort(key, this.rows);
    };
    Grid.prototype.GetIsCellEditable = function () {
        return this.editable;
    };
    Grid.prototype.SetTableCellEditableEventHandler = function () {
        $("#gridTable").on("input", "td", function () {
            var td = this;
            clearTimeout($.data(this, "timer"));
            var wait = setTimeout(saveData.bind(td.innerText), 500); // delay after user types
            $(this).data("timer", wait);
        });
        // Save the date of the edited cell in a preferred way
        function saveData() {
            console.log(this);
            // send to the database with ajax, or websocket etc..
        }
    };
    Grid.prototype.SetRightClickContextMenu = function () {
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
                case "select":
                    SelectRow();
                    break;
                case "delete":
                    DeleteRow();
                    break;
            }
            // Hide it AFTER the action was triggered
            $(".custom-menu").hide(100);
        });
        function SelectRow() {
            var backgroundColor = $(rightClickedRow).css("background-color");
            if ((backgroundColor == "rgba(0, 0, 0, 0)") ||
                (backgroundColor == "rgb(0, 0, 0)") ||
                (backgroundColor == "rgb(249, 249, 249)")) {
                $(rightClickedRow).css("background-color", "#E8CC6F");
            }
            else {
                $(rightClickedRow).css("background-color", "#F9F9F9");
            }
            // Do something with the selected row as needed
            // ADD CODE HERE FOR FURTHER MODIFICATION
        }
        function DeleteRow() {
            console.log(rightClickedRow);
            // Just hiding for demonstration, more complex operation could 
            // be added here, such as deleting from DB
            $(rightClickedRow).remove();
            $("#rowDeletedAlert").show();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Grid.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Grid.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Grid.prototype, "editable", void 0);
    Grid = __decorate([
        core_1.Component({
            selector: "grid",
            inputs: ["rows: rows", "columns: columns"],
            templateUrl: "../html/grid.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map