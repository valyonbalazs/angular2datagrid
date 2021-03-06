/// <reference path="typings/jquery/jquery.d.ts" /> 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var data_container_1 = require("./data-container");
var Pagination = (function () {
    function Pagination() {
        this.numberOfRowsOfTableToDisplay = 8;
        this.currentLink = 1;
        this.numberOfPages = 0;
        this.numberOfPagesArray = [];
        this.currentPage = 1;
    }
    /*
    * Used as a casual constructor
    *  setTimeout needed to wait the grid rendered into the DOM
    */
    Pagination.prototype.ngOnInit = function () {
        console.log("\nPAGINATION was initiatied and created.");
        this.numberOfRowsOfTableToDisplay = this.numberofrows;
        setTimeout(function () {
            this.initializer();
            this.showPage(1, this.numberOfRowsOfTableToDisplay);
        }.bind(this), 30);
    };
    /**
     * Basic component initalization: number of rows, number of all items, number of pages.
     */
    Pagination.prototype.initializer = function () {
        var showRowsPerPage = this.numberOfRowsOfTableToDisplay;
        var numberOfAllItems = data_container_1.DataContainer.getNumberOfRows();
        this.numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
    };
    /**
     * Updates the page number array, according to the current page number.
     * It uses a 5 element range for page number display.
     */
    Pagination.prototype.updateNumberOfPagesArray = function (currentLink, numberOfButtons) {
        if (this.numberOfPagesArray.length != 0) {
            this.numberOfPagesArray = [];
        }
        if (numberOfButtons > this.numberOfPages) {
            numberOfButtons = this.numberOfPages;
        }
        if (currentLink < 5) {
            if (numberOfButtons < 5) {
                for (var i = 1; i < numberOfButtons + 1; i++) {
                    this.numberOfPagesArray.push(i);
                }
            }
            else {
                for (var i = 1; i < 5 + 1; i++) {
                    this.numberOfPagesArray.push(i);
                }
            }
        }
        else {
            if ((currentLink + 2) < this.numberOfPages) {
                for (var j = (currentLink - 2); j < (currentLink + 3); j++) {
                    this.numberOfPagesArray.push(j);
                }
            }
            else {
                var diffCurrentLinkNumberOfPages = this.numberOfPages - currentLink;
                if (diffCurrentLinkNumberOfPages == 0) {
                    for (var k = (currentLink - 4); k < this.numberOfPages + 1; k++) {
                        this.numberOfPagesArray.push(k);
                    }
                }
                else {
                    for (var z = (currentLink - 3); z < this.numberOfPages + 1; z++) {
                        this.numberOfPagesArray.push(z);
                    }
                }
            }
        }
    };
    /**
     * Creates the pager with page numbers, and First, Previous, Next and Last buttons
     * with the current page and link properties.
     * @param currentPage: the needed page.
     */
    Pagination.prototype.createPager = function (currentPage) {
        var numberOfPagesToDisplay = this.numberOfRowsOfTableToDisplay;
        // Just on the last but one page has to change the current link
        if (numberOfPagesToDisplay >= 1) {
            this.currentLink = 1;
        }
        else {
            this.currentLink = numberOfPagesToDisplay + 1;
        }
        if (currentPage > 1) {
            this.currentLink = currentPage;
        }
        this.updateNumberOfPagesArray(this.currentLink, 5);
    };
    /**
     * Main coordinator method of the pagination, what and how to display.
     * @param pageNumber: needed page.
     * @param displayNumberOfRows: how many rows have to be displayed in the grid.
     */
    Pagination.prototype.showPage = function (pageNumber, displayNumberOfRows) {
        this.currentPage = pageNumber;
        this.modifyTbodyRowsAccordingToPageNumber(pageNumber, displayNumberOfRows);
        this.modifyPageNumbersClass(pageNumber);
        this.modifyFirstAndPrevPageButtons(pageNumber);
        this.modifyLastPageNumber(pageNumber);
        this.modifyLastAndNextPageButtons(pageNumber);
        this.createPager(pageNumber);
    };
    Pagination.prototype.modifyTbodyRowsAccordingToPageNumber = function (page, rows) {
        $("#gridTbody tr").hide();
        $("#current_page").val(page);
        $("#gridTbody tr").each(function (n) {
            if (n >= rows * (page - 1) && n < rows * page)
                $(this).show();
        });
    };
    Pagination.prototype.modifyPageNumbersClass = function (page) {
        // Adding and removing class for actual page number SASS styling
        $(".paginationPageNumbers").each(function (n, s) {
            var valueOfAElement = s.textContent;
            if (parseInt(valueOfAElement) == page) {
                try {
                    var previousPageNumber = $(".paginationPageNumbersSelected");
                    if (previousPageNumber != null || previousPageNumber != undefined) {
                        previousPageNumber.removeClass();
                        previousPageNumber.addClass("paginationPageNumbers btn btn-default paginationButton");
                    }
                    else {
                    }
                }
                catch (e) {
                }
                $(this).removeClass();
                $(this).addClass("paginationPageNumbersSelected btn btn-warning paginationButton");
            }
        });
    };
    Pagination.prototype.modifyFirstAndPrevPageButtons = function (page) {
        if (page == 1) {
            $("#paginationFirstPageButton").prop("disabled", true);
            $("#paginationPrevPageButton").prop("disabled", true);
        }
        else {
            $("#paginationFirstPageButton").prop("disabled", false);
            $("#paginationPrevPageButton").prop("disabled", false);
        }
    };
    Pagination.prototype.modifyLastPageNumber = function (page) {
        // The not link last page number is displayed if its not the last
        var lastPageNumber = $("#lastPageNumber").text();
        lastPageNumber = lastPageNumber.replace(/\D/g, "");
        if (parseInt(lastPageNumber) == page) {
            $("#lastPageNumber").hide();
        }
        else {
            $("#lastPageNumber").css("display", "inline");
        }
    };
    Pagination.prototype.modifyLastAndNextPageButtons = function (page) {
        var lastPageNumber = $("#lastPageNumber").text();
        lastPageNumber = lastPageNumber.replace(/\D/g, "");
        if (parseInt(lastPageNumber) == page) {
            $("#paginationNextPageButton").hide();
            $("#paginationLastPageButton").hide();
        }
        else {
            $("#paginationLastPageButton").css("display", "inline");
            $("#paginationNextPageButton").css("display", "inline");
        }
    };
    Pagination.prototype.nextPage = function () {
        var newPage = parseInt($("#current_page").val()) + 1;
        if (newPage <= this.numberOfPages) {
            this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
        }
    };
    Pagination.prototype.lastPage = function () {
        var newPage = this.numberOfPages;
        $("#current_page").val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    };
    Pagination.prototype.firstPage = function () {
        var newPage = 1;
        $("#current_page").val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    };
    Pagination.prototype.previousPage = function () {
        var newPage = parseInt($("#current_page").val()) - 1;
        if (newPage >= 1) {
            $("#current_page").val(newPage);
            this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Pagination.prototype, "numberofrows", void 0);
    Pagination = __decorate([
        core_1.Component({
            selector: "pagination",
            templateUrl: "../html/pagination.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Pagination);
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map