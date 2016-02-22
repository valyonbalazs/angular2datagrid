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
var sorter_1 = require('./sorter');
var data_source_1 = require('./data-source');
var Grid = (function () {
    function Grid() {
        this.sorter = new sorter_1.Sorter();
        this.pageSize = 3;
    }
    Grid.prototype.sort = function (key) {
        this.sorter.sort(key, this.rows);
    };
    Grid.prototype.ngOnInit = function () {
        console.log(this.name);
        this.showPage(1);
    };
    Grid.prototype.createPager = function (page) {
        // TODO: paraméterként kapja maga a grid
        this.showRowsPerPage = 5;
        var numberOfAllItems = data_source_1.DataSource.getNumberOfRows();
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
    };
    Grid.prototype.showPage = function (page) {
        $("#paginate tr").hide();
        $('#current_page').val(page);
        $("#paginate tr").each(function (n) {
            console.log(this);
            if (n >= this.pageSize * (page - 1) && n < this.pageSize * page)
                $(this).show();
        });
        var pager = this.createPager(page);
    };
    Grid.prototype.next = function () {
        var newPage = parseInt($('#current_page').val()) + 1;
        this.showPage(newPage);
    };
    Grid.prototype.last = function (numberOfPages) {
        var newPage = numberOfPages;
        $('#current_page').val(newPage);
        this.showPage(newPage);
    };
    Grid.prototype.first = function () {
        var newPage = "1";
        $('#current_page').val(newPage);
        this.showPage(newPage);
    };
    Grid.prototype.previous = function () {
        var newPage = parseInt($('#current_page').val()) - 1;
        $('#current_page').val(newPage);
        this.showPage(newPage);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Grid.prototype, "name", void 0);
    Grid = __decorate([
        core_1.Component({
            selector: 'grid',
            inputs: ['rows: rows', 'columns: columns'],
            templateUrl: './grid.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Grid);
    return Grid;
})();
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map