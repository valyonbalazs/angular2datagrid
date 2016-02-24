/// <reference path="typings/jquery/jquery.d.ts" />

import {Component, Input, OnInit} from 'angular2/core';
import {Grid} from './grid';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.html' 
    // template: '<input type="hidden" id="current_page" />< input type="hidden" id="show_per_page" /><div id="page_navigation"></div>'
})

export class Pagination {

    public static pageSize: number = 5;
    public static rowsPerPage: number = 6;
    public static currentLinkCurrentPage: number = 1;
    public currentLink: number = 0;
    public numberOfPages: number = 0;
    public numberOfPagesArray: Array<number> = [1,2,3];

    constructor() {
        /*Pagination.pageSize = pageS;
        Pagination.rowsPerPage = rowsPerP;*/
        this.showPage(1);
    }

    public createPager(page: number) {

        var showRowsPerPage = Pagination.rowsPerPage;
        // var numberOfAllItems = $('#paginate tr').size();
        var numberOfAllItems = $('#paginate tr').length;
        this.numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
        // this.numberOfPagesArray = null;
        // this.numberOfPagesArray = [];
        /*for (var i = 1; i < this.numberOfPages + 1; i++) {
            Pagination.numberOfPagesArray.push(i);
            console.log(i);
        }*/
        console.log(this);

        var numberOfPagesToDisplay = Pagination.pageSize;
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

    public showPage(page) {
        console.log("megnyomtam");
        $("#paginate tr").hide();
        $("#current_page").val(page);

        $("#paginate tr").each(function (n) {
            if (n >= Pagination.pageSize * (page - 1) && n < Pagination.pageSize * page)
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