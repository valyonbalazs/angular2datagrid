/// <reference path="typings/jquery/jquery.d.ts" />

import {Component, Input, OnInit} from 'angular2/core';
import {Column} from './column';
import {Sorter} from './sorter';
import {DataSource} from './data-source';

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
        setTimeout(function () { this.showPage(1); }.bind(this), 900);
        // this.showPage(1);
    }


    public createPager(page: number) {

        // TODO: paraméterként kapja maga a grid
        var showRowsPerPage = 5;
        // var numberOfAllItems = $('#paginate tr').size();
        var numberOfAllItems = $('#paginate tr').length;
        var numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
        var numberOfPagesToDisplay = 5;
        var navigationHtml = '';
        var currentPage = page;
        var currentLink = (numberOfPagesToDisplay >= currentPage ? 1 : numberOfPagesToDisplay + 1);

        if (currentPage > 1) {
            currentLink = currentPage;
        }
        if (currentLink != 1) {
            navigationHtml += "<a class='nextbutton' href=\"javascript:first();\">« Start&nbsp;</a>&nbsp;<a class='nextbutton' href=\"javascript:previous();\">« Prev&nbsp;</a>&nbsp;";
        }
        if (currentLink == numberOfPages - 1) {
            // TODO: numberofpagestodisplay-től függ, paraméterezhetővé kéne tenni
            currentLink = currentLink - 3;
        }
        else if (currentLink == numberOfPages) {
            currentLink = currentLink - 4;
        }
        else if (currentLink > 2) {
            currentLink = currentLink - 2;
        }
        else {
            currentLink = 1;
        }

        var pages = numberOfPagesToDisplay;
        while (pages != 0) {
            if (numberOfPages < currentLink) {
                break;
            }
            if (currentLink >= 1) {
                navigationHtml += "<a class='" + ((currentLink == currentPage) ? "currentPageButton" : "numericButton") + "' href=\"javascript:showPage(" + currentLink + ")\" longdesc='" + currentLink + "'>" + (currentLink) + "</a>&nbsp;";
                currentLink++;
                pages--;
            }
        }
        if (numberOfPages > currentPage) {
            navigationHtml += "<a class='nextbutton' href=\"javascript:next()\">Next »</a>&nbsp;<a class='nextbutton' href=\"javascript:last(" + numberOfPages + ");\">Last »</a>";
        }

        $('#page_navigation').html(navigationHtml);
    }

    public static pageSize = 3;

    public showPage(page) {
        $("#paginate tr").hide();
        $("#current_page").val(page);
        $("#paginate tr").each(function (n) {
            console.log(this);
            console.log(n);
            console.log(this.pageSize);
            if (n >= Grid.pageSize * (page - 1) && n < Grid.pageSize * page)
                $(this).show();
        });
        var pager = this.createPager(page);
    }

    public next() {
        var newPage = parseInt($('#current_page').val()) + 1;
        this.showPage(newPage);
    }

    public last(numberOfPages) {
        var newPage = numberOfPages;
        $('#current_page').val(newPage);
        this.showPage(newPage);
    }

    public first() {
        var newPage = "1";
        $('#current_page').val(newPage);
        this.showPage(newPage); 
    }

    public previous() {
        var newPage = parseInt($('#current_page').val()) - 1;
        $('#current_page').val(newPage);
        this.showPage(newPage)
    }
}