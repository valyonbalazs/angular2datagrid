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

    private showRowsPerPage: number;

    columns: Array<Column>;
    rows: Array<any>;

    @Input() name: string;

    private sorter = new Sorter();

    public sort(key) {
        this.sorter.sort(key, this.rows);
    }

    ngOnInit() {
        console.log(this.name);
        this.showPage(1);
    }


    public createPager(page: number) {

        // TODO: paraméterként kapja maga a grid
        this.showRowsPerPage = 5;
        var numberOfAllItems = DataSource.getNumberOfRows();
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
        if (currentLink == numberOfPagesToDisplay - 1) {
            // TODO: numberofpagestodisplay-től függ, paraméterezhetővé kéne tenni
            currentLink = currentLink - 3;
        }
        else if (currentLink == numberOfPagesToDisplay) {
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
            if (numberOfPagesToDisplay < currentLink) {
                break;
            }
            if (currentLink >= 1) {
                navigationHtml += "<a class='" + ((currentLink == currentPage) ? "currentPageButton" : "numericButton") + "' href=\"javascript:showPage(" + currentLink + ")\" longdesc='" + currentLink + "'>" + (currentLink) + "</a>&nbsp;";
                currentLink++;
                pages--;
            }
            if (numberOfPagesToDisplay > currentPage) {
                navigationHtml += "<a class='nextbutton' href=\"javascript:next()\">Next »</a>&nbsp;<a class='nextbutton' href=\"javascript:last(" + numberOfPagesToDisplay + ");\">Last »</a>";
            }

            $('#page_navigation').html(navigationHtml);
        }
    }

    pageSize = 3;

    public showPage(page) {
        $("#paginate tr").hide();
        $('#current_page').val(page);
        $("#paginate tr").each(function (n) {
            console.log(this);
            if (n >= this.pageSize * (page - 1) && n < this.pageSize * page)
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