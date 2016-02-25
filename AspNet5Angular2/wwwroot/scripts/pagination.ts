/// <reference path="typings/jquery/jquery.d.ts" />

import {Component, Input, OnInit, Injector} from 'angular2/core';
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
    public currentLink: number = 1;
    public numberOfPages: number = 0;
    public numberOfPagesArray: Array<number> = [];

    constructor() {
        this.numberOfRowsOfTableToDisplay = 6;
        this.initializer();
        this.showPage(1, this.numberOfRowsOfTableToDisplay);
    }

    private initializer() {
        let showRowsPerPage = Pagination.rowsPerPage;
        let numberOfAllItems = DataSource.getNumberOfRows();
        this.numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
    }

    /**
     * Updates the page number array
     */
    public updateNumberOfPagesArray(currentLink: number, numberOfButtons: number) {

        console.log("nummber");

        if (this.numberOfPagesArray.length != 0) {
            this.numberOfPagesArray = [];
        }

        if (currentLink < 5) {
            for (let i = 1; i < 5 + 1; i++) {
                this.numberOfPagesArray.push(i);
            }
        }
        else {
            if ((currentLink + 2) < this.numberOfPages) {
                for (let j = (currentLink - 2); j < (currentLink + 3); j++) {
                    this.numberOfPagesArray.push(j);
                }
            }
            else {
                let diffCurrentLinkNumberOfPages = this.numberOfPages - currentLink;
                if (diffCurrentLinkNumberOfPages == 0) {
                    for (let k = (currentLink - 4); k < this.numberOfPages + 1; k++) {
                        this.numberOfPagesArray.push(k);
                    }
                } else {
                    for (let z = (currentLink - 3); z < this.numberOfPages + 1; z++) {
                        this.numberOfPagesArray.push(z);
                    }
                }
            }
        }
    }

    public createPager(page: number) {

        console.log("create");

        var numberOfPagesToDisplay = this.numberOfRowsOfTableToDisplay;
        var navigationHtml = '';
        var currentPage = page;

        // Just on the last but one page has to change the current link
        if (numberOfPagesToDisplay >= 1) {
            this.currentLink = 1;
        } else {
            this.currentLink = numberOfPagesToDisplay + 1;
        }

        if (currentPage > 1) {
            this.currentLink = currentPage;
        }
        /*
        // If it is not the first page, the Start and Previous button has to be displayed
        if (this.currentLink != 1) {
            // navigationHtml += "<a class='nextbutton' href=\"javascript:first(); \">« Start&nbsp;</a>&nbsp;<a class='nextbutton' href=\"javascript:previous();\">« Prev&nbsp;</a>&nbsp;";
            // navigationHtml += "<button (click)=\"first()\">« Start&nbsp;</button>&nbsp;<button (click)=\"previous();\">« Prev&nbsp;</button>&nbsp;";
        }
        if (this.currentLink == this.numberOfPages - 1) {
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
        }*/

        this.updateNumberOfPagesArray(this.currentLink, 6);

        /*var pages = numberOfPagesToDisplay;
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
        // $('#page_nav_nextLast').html(navigationHtml);*/
    }

    public showPage(page, pageS) {

        console.log("show");
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