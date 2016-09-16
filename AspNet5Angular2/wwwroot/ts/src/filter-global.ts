/// <reference path="typings/jquery/jquery.d.ts" /> 

import {Component, Input, OnInit} from "angular2/core";
import {DataContainer} from "./data-container";

@Component({
    selector: "filter-global",
    templateUrl: "../html/filter-global.html"
})

/**
* Global filter modul, which functionality is based on a search which
* looks in every cell in the grid.
*/
export class FilterGlobal {

    @Input() pagination: boolean;

    private searchGlobalFilter: HTMLElement = null;

    ngOnInit() {
        console.log("\FILTERGLOBAL was initiatied and created.");
        this.searchGlobalFilter = document.getElementById("search");
        this.searchGlobalFilter.addEventListener("keyup", (e) => this.searchKeyUp(e));
    }

    private searchKeyUp(event): void {

        var $rows = $("#gridTbody tr");
        var searchInput = $("#search");
        var value = $.trim(searchInput.val()).replace(/ +/g, " ").toLowerCase();
        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, " ").toLowerCase();
            return !~text.indexOf(value);
        }).hide();

        if (searchInput.val().length == 0 && this.pagination) {
            document.getElementById("paginationFirstPageButton").click();
        }
    }
}