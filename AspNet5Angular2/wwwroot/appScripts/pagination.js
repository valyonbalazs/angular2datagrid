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
var data_source_1 = require('./data-source');
var Pagination = (function () {
    function Pagination() {
        this.numberOfRowsOfTableToDisplay = 8;
        this.currentLink = 0;
        this.numberOfPages = 0;
        this.numberOfPagesArray = [];
        this.initializer();
        this.showPage(1, this.numberOfRowsOfTableToDisplay);
    }
    Pagination.prototype.initializer = function () {
        var showRowsPerPage = Pagination.rowsPerPage;
        var numberOfAllItems = data_source_1.DataSource.getNumberOfRows();
        this.numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
    };
    Pagination.prototype.updateNumberOfPagesArray = function () {
        if (this.numberOfPagesArray.length != 0) {
            this.numberOfPagesArray.forEach(function (n, i, a) { return a.pop(); });
        }
        for (var i = 1; i < this.numberOfPages + 1; i++) {
            this.numberOfPagesArray.push(i);
            console.log(i);
        }
    };
    Pagination.prototype.createPager = function (page) {
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
        }
        // $('#page_navigation').html(navigationHtml);
        // $('#page_nav_nextLast').html(navigationHtml);
    };
    Pagination.prototype.showPage = function (page, pageS) {
        console.log("megnyomtam");
        $("#paginate tr").hide();
        $("#current_page").val(page);
        $("#paginate tr").each(function (n) {
            if (n >= pageS * (page - 1) && n < pageS * page)
                $(this).show();
        });
        var pager = this.createPager(page);
    };
    Pagination.prototype.next = function () {
        var newPage = parseInt($('#current_page').val()) + 1;
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    };
    Pagination.prototype.last = function (numberOfPages) {
        var newPage = numberOfPages;
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    };
    Pagination.prototype.first = function () {
        var newPage = "1";
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    };
    Pagination.prototype.previous = function () {
        var newPage = parseInt($('#current_page').val()) - 1;
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    };
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