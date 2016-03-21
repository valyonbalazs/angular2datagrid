/// <reference path="typings/jquery/jquery.d.ts" /> 

import {Component, Input, OnInit} from 'angular2/core';
import {DataContainer} from './data-container';

@Component({
    selector: 'filter-global',
    templateUrl: '../html/filter-global.html'
})

export class FilterGlobal {

    constructor() {
        console.log("\nletrejott FILTERGLOBAL");
    }

    public SearchInputKeyUpEvent() {
        var $rows = $('#gridTable tr');
        $('#search').keyup(function () {
            var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

            $rows.show().filter(function () {
                var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                return !~text.indexOf(val);
            }).hide();
        });
    }
}