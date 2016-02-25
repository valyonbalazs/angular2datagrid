/// <reference path="typings/jquery/jquery.d.ts" />

import {Component, Input, OnInit} from 'angular2/core';
import {Grid} from './grid';
import {DataSource} from './data-source';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.html' 
})

export class Pagination {

    private numberOfRowsOfTableToDisplay: number = 8;
    public static rowsPerPage: number = 6;
    public static currentLinkCurrentPage: number = 1;
    public currentLink: number = 0;
    public numberOfPages: number = 0;
    public numberOfPagesArray: Array<number> = [];

    constructor(numberOfRowsToDisplay: number) {
        this.numberOfRowsOfTableToDisplay = numberOfRowsToDisplay;
        this.initializer();
        this.showPage(1, this.numberOfRowsOfTableToDisplay);
    }

    private initializer() {
        let showRowsPerPage = Pagination.rowsPerPage;
        let numberOfAllItems = DataSource.getNumberOfRows();
        this.numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
    }

    private updateNumberOfPagesArray() {

        if (this.numberOfPagesArray.length != 0) {
            this.numberOfPagesArray.forEach((n, i, a) => a.pop());
        }

        for (var i = 1; i < this.numberOfPages + 1; i++) {
            this.numberOfPagesArray.push(i);
            console.log(i);
        }
    }

    public createPager(page: number) {

        this.updateNumberOfPagesArray();

        console.log(this);
        var numberOfPagesToDisplay = this.numberOfRowsOfTableToDisplay;
        var navigationHtml = '';
        var currentPage = page;
        this.currentLink = (numberOfPagesToDisplay >= currentPage ? 1 : numberOfPagesToDisplay + 1);

        if (currentPage > 1) {
            this.currentLink = currentPage;
        }
        if (this.currentLink != 1) {
            // navigationHtml += "<a class='nextbutton' href=\"javascript:first(); \">« Start&nbsp;</a>&nbsp;<a class='nextbutton' href=\"javascript:previous();\">« Prev&nbsp;</a>&nbsp;";
            navigationHtml += "<button (click)=\"first()\">« Start&nbsp;</button>&nbsp;<button (click)=\"previous();\">« Prev&nbsp;</button>&nbsp;";
        }
        if (this.currentLink == this.numberOfPages - 1) {
            // TODO: numberofpagestodisplay-től függ, paraméterezhetővé kéne tenni
            this.currentLink = this.currentLink - 3;
        }
        else if (this.currentLink == this.numberOfPages) {
            this.currentLink = this.currentLink - 4;
        }
        else if (this.currentLink > 2) {
            this.currentLink = this.currentLink - 2;
        }
        else {
            this.currentLink = 1;
        }

        var pages = numberOfPagesToDisplay;
        while (pages != 0) {
            if (this.numberOfPages < this.currentLink) {
                break;
            }
            if (this.currentLink >= 1) {
                // navigationHtml += "<a class='" + ((currentLink == currentPage) ? "currentPageButton" : "numericButton") + "' href=\"javascript:showPage(" + currentLink + ")\" longdesc='" + currentLink + "'>" + (currentLink) + "</a>&nbsp;";
                // navigationHtml += "<button (click)=\"showPage(" + this.currentLink + ")\" >" + (this.currentLink) + "</button>&nbsp;";
                // navigationHtml += "<button  (click)=\"showPage(" + this.currentLink + ")\" > " + this.currentLink + " </button>&nbsp";
                this.currentLink++;
                pages--;
            }
        }
        if (this.numberOfPages > currentPage) {
            // navigationHtml += "<a id=\"nextBtn\" class='nextbutton' href=\"#\" \">Next »</a>&nbsp;<a class='nextbutton' href=\"javascript:last(" + numberOfPages + ");\">Last »</a>";           
            // navigationHtml += "<button class='nextbutton' (click)=\"next()\" \">Next »</button>&nbsp;<button class='nextbutton' (click)=\"last(" + this.numberOfPages + ");\">Last »</button>";           
        }

        // $('#page_navigation').html(navigationHtml);
        // $('#page_nav_nextLast').html(navigationHtml);
    }

    public showPage(page, pageS) {
        console.log("megnyomtam");
        $("#paginate tr").hide();
        $("#current_page").val(page);

        $("#paginate tr").each(function (n) {
            if (n >= pageS * (page - 1) && n < pageS * page)
                $(this).show();
        });
        var pager = this.createPager(page);
    }

    public next() {
        var newPage = parseInt($('#current_page').val()) + 1;
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public last(numberOfPages) {
        var newPage = numberOfPages;
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public first() {
        var newPage = "1";
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public previous() {
        var newPage = parseInt($('#current_page').val()) - 1;
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay)
    }
}