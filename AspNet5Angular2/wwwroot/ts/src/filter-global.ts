/// <reference path="typings/jquery/jquery.d.ts" /> 

import {Component, Input, OnInit} from 'angular2/core';
import {DataContainer} from './data-container';
import {Pagination} from './pagination';
import {GridConfig} from './grid-configuration';

@Component({
    selector: 'filter-global',
    templateUrl: '../html/filter-global.html'
})

export class FilterGlobal {

    private searchGlobalFilter: HTMLElement = null;

    constructor() {
        console.log("\nletrejott FILTERGLOBAL");
    }

    ngOnInit() {
        this.searchGlobalFilter = document.getElementById('search');
        this.searchGlobalFilter.addEventListener("keyup", (e) => this.SearchKeyUp(e));
    }

    public SearchKeyUp(event) {
        //console.log(event);

        var $rows = $('#gridTbody tr');
        var searchInput = $('#search');
        var value = $.trim(searchInput.val()).replace(/ +/g, ' ').toLowerCase();
        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(value);
        }).hide();

        if (searchInput.val().length == 0 && GridConfig.GetIsPaginationEnabled() == true) {
            document.getElementById("paginationFirstPageButton").click();
            console.log("was clicked");
        }
    }

}