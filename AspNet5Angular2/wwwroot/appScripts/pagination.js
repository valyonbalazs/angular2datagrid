/// <reference path="typings/jquery/jquery.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Pagination = (function () {
    function Pagination() {
        this.currentLink = 0;
        this.numberOfPages = 0;
        this.numberOfPagesArray = [1, 2, 3];
        /*Pagination.pageSize = pageS;
        Pagination.rowsPerPage = rowsPerP;*/
        this.showPage(1);
    }
    Pagination.prototype.createPager = function (page) {
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
        }
        // $('#page_navigation').html(navigationHtml);
        // $('#page_nav_nextLast').html(navigationHtml);
    };
    Pagination.prototype.showPage = function (page) {
        console.log("megnyomtam");
        $("#paginate tr").hide();
        $("#current_page").val(page);
        $("#paginate tr").each(function (n) {
            if (n >= Pagination.pageSize * (page - 1) && n < Pagination.pageSize * page)
                $(this).show();
        });
        var pager = this.createPager(page);
    };
    Pagination.prototype.next = function () {
        var newPage = parseInt($('#current_page').val()) + 1;
        this.showPage(newPage);
    };
    Pagination.prototype.last = function (numberOfPages) {
        var newPage = numberOfPages;
        $('#current_page').val(newPage);
        this.showPage(newPage);
    };
    Pagination.prototype.first = function () {
        var newPage = "1";
        $('#current_page').val(newPage);
        this.showPage(newPage);
    };
    Pagination.prototype.previous = function () {
        var newPage = parseInt($('#current_page').val()) - 1;
        $('#current_page').val(newPage);
        this.showPage(newPage);
    };
    Pagination.pageSize = 5;
    Pagination.rowsPerPage = 6;
    Pagination.currentLinkCurrentPage = 1;
    Pagination = __decorate([
        core_1.Component({
            selector: 'pagination',
            templateUrl: './pagination.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Pagination);
    return Pagination;
})();
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map